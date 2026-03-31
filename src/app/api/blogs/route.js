import { db } from "@/lib/db";

// GET
export async function GET() {
  const [rows] = await db.query("SELECT * FROM blogs ORDER BY id DESC");
  return Response.json(rows);
}

// ADD
export async function POST(req) {
  const { title, description, image, content, blocks } = await req.json();

  await db.query(
    "INSERT INTO blogs (title, description, image, content, blocks) VALUES (?, ?, ?, ?, ?)",
    [
      title,
      description,
      image,
      content || "",
      JSON.stringify(blocks || []),
    ]
  );

  return Response.json({ success: true });
}

// UPDATE
export async function PUT(req) {
  const { id, title, description, image, content, blocks } =
    await req.json();

  await db.query(
    "UPDATE blogs SET title=?, description=?, image=?, content=?, blocks=? WHERE id=?",
    [
      title,
      description,
      image,
      content || "",
      JSON.stringify(blocks || []),
      id,
    ]
  );

  return Response.json({ success: true });
}

// DELETE
export async function DELETE(req) {
  const { id } = await req.json();

  await db.query("DELETE FROM blogs WHERE id = ?", [id]);

  return Response.json({ success: true });
}