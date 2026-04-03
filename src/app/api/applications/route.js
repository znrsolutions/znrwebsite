import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET() {
  try {
    const [rows] = await db.query(`
      SELECT applications.*, jobs.title 
      FROM applications
      LEFT JOIN jobs ON jobs.id = applications.job_id
      ORDER BY applications.id DESC
    `);

    return NextResponse.json(rows);

  } catch (err) {
    console.error("APPLICATION FETCH ERROR:", err);

    return NextResponse.json(
      { error: "Failed to fetch applications" },
      { status: 500 }
    );
  }
}