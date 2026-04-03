import { db } from "@/lib/db";

// GET ALL JOBS
export async function GET() {
  const [rows] = await db.query("SELECT * FROM jobs ORDER BY id DESC");
  return Response.json(rows);
}

// ADD JOB
export async function POST(req) {
  const { title, type, location, description } = await req.json();

  await db.query(
    "INSERT INTO jobs (title, type, location, description) VALUES (?, ?, ?, ?)",
    [title, type, location, description]
  );

  return Response.json({ success: true });
}

// UPDATE JOB
export async function PUT(req) {
  const { id, title, type, location, description } = await req.json();

  await db.query(
    "UPDATE jobs SET title=?, type=?, location=?, description=? WHERE id=?",
    [title, type, location, description, id]
  );

  return Response.json({ success: true });
}

// DELETE JOB
export async function DELETE(req) {
  const { id } = await req.json();

  await db.query("DELETE FROM jobs WHERE id=?", [id]);

  return Response.json({ success: true });
}