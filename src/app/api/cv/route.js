import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { db } from "@/lib/db";

const uploadDir = path.join(process.cwd(), "public/uploads/cv");

// ✅ GET ALL CV SUBMISSIONS (ADMIN)
export async function GET() {
  try {
    const [rows] = await db.query(
      "SELECT * FROM cv_submissions ORDER BY id DESC"
    );

    return NextResponse.json(rows);
  } catch (err) {
    console.error("GET CV ERROR:", err);
    return NextResponse.json(
      { error: "Failed to fetch CVs" },
      { status: 500 }
    );
  }
}

// ✅ UPLOAD CV
export async function POST(req) {
  try {
    const formData = await req.formData();

    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");
    const file = formData.get("cv");

    // ❗ VALIDATION
    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email required" },
        { status: 400 }
      );
    }

    if (!file) {
      return NextResponse.json(
        { error: "No file uploaded" },
        { status: 400 }
      );
    }

    // 🔒 FILE TYPE VALIDATION
    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json(
        { error: "Only PDF or Word files allowed" },
        { status: 400 }
      );
    }

    // 🔒 FILE SIZE LIMIT (2MB)
    if (file.size > 2 * 1024 * 1024) {
      return NextResponse.json(
        { error: "File must be less than 2MB" },
        { status: 400 }
      );
    }

    // 🔥 CONVERT FILE
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // 📁 CREATE FOLDER IF NOT EXISTS
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    // 📁 SAVE FILE
    const fileName = Date.now() + "-" + file.name;
    const filePath = path.join(uploadDir, fileName);

    fs.writeFileSync(filePath, buffer);

    const fileUrl = `/uploads/cv/${fileName}`;

    // ✅ SAVE TO DATABASE
    await db.query(
      "INSERT INTO cv_submissions (name, email, message, file) VALUES (?, ?, ?, ?)",
      [name, email, message || "", fileUrl]
    );

    return NextResponse.json({
      success: true,
      file: fileUrl,
    });

  } catch (err) {
    console.error("CV UPLOAD ERROR:", err);

    return NextResponse.json(
      { error: "Upload failed" },
      { status: 500 }
    );
  }
}

// ✅ DELETE CV (ADMIN)
export async function DELETE(req) {
  try {
    const { id } = await req.json();

    // 🔍 GET FILE PATH FROM DB
    const [rows] = await db.query(
      "SELECT file FROM cv_submissions WHERE id = ?",
      [id]
    );

    if (rows.length === 0) {
      return NextResponse.json(
        { error: "CV not found" },
        { status: 404 }
      );
    }

    const filePath = path.join(process.cwd(), "public", rows[0].file);

    // 🗑 DELETE FILE FROM STORAGE
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }

    // 🗑 DELETE FROM DATABASE
    await db.query(
      "DELETE FROM cv_submissions WHERE id = ?",
      [id]
    );

    return NextResponse.json({ success: true });

  } catch (err) {
    console.error("DELETE CV ERROR:", err);

    return NextResponse.json(
      { error: "Delete failed" },
      { status: 500 }
    );
  }
}