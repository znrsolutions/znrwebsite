import { db } from "@/lib/db";

export async function GET(req, { params }) {
  try {
    const [rows] = await db.query(
      "SELECT * FROM blogs WHERE id = ?",
      [params.id]
    );

    const blog = rows[0];

    if (!blog) {
      return Response.json({ error: "Not found" }, { status: 404 });
    }

    // 🔥 IMPORTANT: parse blocks
    blog.blocks = blog.blocks ? JSON.parse(blog.blocks) : [];

    return Response.json(blog);

  } catch (err) {
    console.error("BLOG FETCH ERROR:", err);
    return Response.json({ error: "Server error" }, { status: 500 });
  }
}