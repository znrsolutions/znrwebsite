import { db } from "@/lib/db";
import styles from "./blogDetail.module.scss";

export default async function BlogDetail({ params }) {
  const [rows] = await db.query(
    "SELECT * FROM blogs WHERE id = ?",
    [params.id]
  );

  const blog = rows[0];

  if (!blog) {
    return <h1 className={styles.notFound}>Blog not found</h1>;
  }

  // 🔥 SAFE PARSE
  let blocks = [];
  try {
    if (blog.blocks && blog.blocks !== "undefined") {
      blocks = JSON.parse(blog.blocks);
    }
  } catch (err) {
    console.error("BLOCK PARSE ERROR:", err);
    blocks = [];
  }

  return (
    <main className={styles.blogDetail}>

      <div className={styles.container}>

        {/* TITLE */}
        <h1 className={styles.title}>{blog.title}</h1>

        {/* MAIN IMAGE */}
        {blog.image && (
          <img
            src={blog.image}
            alt={blog.title}
            className={styles.mainImage}
          />
        )}

        {/* DESCRIPTION */}
        <p className={styles.description}>
          {blog.description}
        </p>

        {/* MAIN CONTENT */}
        {blog.content && (
          <div className={styles.content}>
            {blog.content}
          </div>
        )}

        {/* 🔥 BLOCKS */}
        {blocks.length > 0 && (
          <div className={styles.blocks}>
            {blocks.map((block, i) => {

              if (!block) return null;

              // TEXT
              if (block.type === "text") {
                return (
                  <p key={i} className={styles.textBlock}>
                    {block.value}
                  </p>
                );
              }

              // IMAGE
              if (block.type === "image") {
                return (
                  <img
                    key={i}
                    src={block.value}
                    className={styles.imageBlock}
                  />
                );
              }

              // CODE
              if (block.type === "code") {
                return (
                  <pre key={i} className={styles.codeBlock}>
                    <code>{block.value}</code>
                  </pre>
                );
              }

              return null;
            })}
          </div>
        )}

      </div>
    </main>
  );
}