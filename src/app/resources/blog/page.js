"use client";

import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
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
    <>
      <Head>
        <title>ZNR Blog | Fintech, Retail & Cybersecurity Insights</title>

        <meta
          name="description"
          content="Explore insights on fintech, retail technology, cybersecurity, and digital transformation from ZNR Solutions."
        />

        <meta
          name="keywords"
          content="fintech blog, cybersecurity blog, retail technology articles, IT insights, software development blog"
        />

        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://znrsolutions.com/resources" />

        {/* OPEN GRAPH */}
        <meta property="og:title" content="ZNR Blog & Insights" />
        <meta
          property="og:description"
          content="Latest insights on fintech, cybersecurity, and retail technology."
        />
        <meta property="og:url" content="https://znrsolutions.com/resources" />
        <meta property="og:image" content="/og-image.png" />

        {/* TWITTER */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ZNR Blog & Insights" />
        <meta
          name="twitter:description"
          content="Read insights on fintech, retail, and cybersecurity."
        />
        <meta name="twitter:image" content="/og-image.png" />

        {/* STRUCTURED DATA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Blog",
              name: "ZNR Blog",
              url: "https://znrsolutions.com/resources",
            }),
          }}
        />
      </Head>

      <main className={styles.blog}>
        {/* HERO */}
        <section className={styles.hero}>
          <div className={styles.top}>
            <h1 onDoubleClick={() => (window.location.href = "/admin/login")}>
              Blog
            </h1>

            <h2 style={{ display: "none" }}>
              Fintech, Retail & Cybersecurity Insights from ZNR Solutions
            </h2>
            <p className={styles.heroSub2}>
              Explore articles on fintech systems, cybersecurity, retail
              technology, and modern software development strategies from ZNR
              Solutions.
            </p>
            {/* <p>The latest insights, ideas and perspectives at ZNR.</p> */}
          </div>

          <div className={styles.image}>
            <Image
              src="/blog.png"
              alt="ZNR blog insights on fintech, retail and cybersecurity"
              width={1200}
              height={350}
            />
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
                experience and expertise to provide an excellent experience
                across spheres, for truly holistic IT.
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
    
    {/* ✅ EMPTY STATE */}
    {blogs.length === 0 && (
      <p style={{ textAlign: "center", marginTop: "40px" }}>
        No articles yet. Check back soon.
      </p>
    )}

    {/* BLOG LIST */}
    {blogs.map((b) => (
      <Link
        key={b.id}
        href={`/resources/blog/${b.id}`}
        className={styles.card}
      >
        <Image
          src={b.image}
          alt={`${b.title} - ZNR blog on fintech, retail and cybersecurity`}
          width={400}
          height={250}
        />
        <h3>{b.title}</h3>
        <p>{b.description}</p>
        <span>Read more →</span>
      </Link>
    ))}
    
  </div>
</section>
        <div className={styles.links}>
  <Link href="/solutions" className={styles.linkItem}>
    Explore Our Services →
  </Link>

  <Link href="/fintech" className={styles.linkItem}>
    Fintech Solutions →
  </Link>
</div>
      </main>
    </>
  );
}
