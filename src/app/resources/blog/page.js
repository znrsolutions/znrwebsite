"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./blog.module.scss";

export default function Blog() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("/api/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <main className={styles.blog}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.top}>
          <h1 onDoubleClick={() => (window.location.href = "/admin/login")}>
            Blog
          </h1>
          <p>The latest insights, ideas and perspectives at ZNR.</p>
        </div>

        <div className={styles.image}>
          <img src="/blog.png" alt="Blog" />
        </div>
      </section>

      {/* INFO */}
      <section className={styles.info}>
        <div className={styles.infoContainer}>
          <div className={styles.left}>
            <h2>Comprehensive IT services for businesses</h2>
          </div>

          <div className={styles.right}>
            <p>
              When we say comprehensive, we mean comprehensive. ZNR has the
              experience and expertise to provide an excellent experience across
              spheres, for truly holistic IT.
            </p>

            <p>
              Some MSPs struggle to offer consulting or network services. But
              your organization needs the entire experience to stop worrying
              about IT. Learn more about our services below.
            </p>
          </div>
        </div>
      </section>

      {/* BLOG GRID */}
      <section className={styles.gridSection}>
        <div className={styles.grid}>
          {blogs.map((b) => (
            <Link
              key={b.id}
              href={`/resources/blog/${b.id}`}
              className={styles.card}
            >
              <img src={b.image} alt={b.title} />
              <h3>{b.title}</h3>
              <p>{b.description}</p>
              <span>Read more →</span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
