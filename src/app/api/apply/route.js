import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(req) {
  try {
    const formData = await req.formData();

    const job_id = formData.get("job_id");
    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");
    const phone = formData.get("phone");
    const email = formData.get("email");
    const file = formData.get("cv");

    // SAVE FILE
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const fileName = Date.now() + "-" + file.name;
    const filePath = path.join(process.cwd(), "public/uploads", fileName);

    fs.writeFileSync(filePath, buffer);

    const fileUrl = "/uploads/" + fileName;

    // SAVE DB
    await db.query(
      "INSERT INTO applications (job_id, firstName, lastName, phone, email, cv) VALUES (?, ?, ?, ?, ?, ?)",
      [job_id, firstName, lastName, phone, email, fileUrl]
    );

    return NextResponse.json({ success: true });

  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}