import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST(req) {
  try {
    const { username, password } = await req.json();

    const [rows] = await db.query(
      "SELECT * FROM admins WHERE username = ? AND password = ?",
      [username, password]
    );

    if (rows.length === 0) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }

    // ✅ create response
    const response = NextResponse.json({ success: true });

    // ✅ set cookie correctly
    response.cookies.set("admin", "true", {
      httpOnly: true,
      path: "/",
    });

    return response;

  } catch (error) {
    console.error("LOGIN ERROR:", error);

    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}