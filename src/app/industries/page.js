import styles from "./industries.module.scss";
import Link from "next/link";

import Head from "next/head";
import Image from "next/image";

export default function Industries() {
  return (
    <>
      <Head>
        <title>
          Industries We Serve | Fintech, Retail & Technology Solutions
        </title>

        <meta
          name="description"
          content="ZNR Solutions delivers fintech, retail, and industry-specific digital solutions to help businesses innovate and scale."
        />

        <meta
          name="keywords"
          content="industries fintech retail solutions, IT services industries, software solutions industries"
        />

        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://znrsolutions.com/industries" />

        {/* OPEN GRAPH */}
        <meta
          property="og:title"
          content="Industries We Serve | ZNR Solutions"
        />
        <meta
          property="og:description"
          content="Explore fintech, retail, and industry-focused technology solutions."
        />
        <meta property="og:url" content="https://znrsolutions.com/industries" />
        <meta property="og:image" content="/og-image.png" />

        {/* TWITTER */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Industries We Serve | ZNR Solutions"
        />
        <meta
          name="twitter:description"
          content="Discover industries we serve including fintech and retail."
        />
        <meta name="twitter:image" content="/og-image.png" />

        {/* STRUCTURED DATA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              name: "Industries",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Fintech" },
                { "@type": "ListItem", position: 2, name: "Retail" },
              ],
            }),
          }}
        />
      </Head>

      <main className={styles.industries}>
        {/* HERO */}
        <section className={styles.hero}>
          <h1>Industries</h1>

          <h2 style={{ display: "none" }}>
            Industries We Serve – Fintech, Retail & Technology Solutions
          </h2>
          <p className={styles.heroSub2}>
            ZNR Solutions provides industry-specific digital solutions for
            fintech, retail, healthcare, and enterprise businesses to scale and
            innovate.
          </p>
        </section>

        {/* GRID */}
        <section className={styles.gridSection}>
          <div className={styles.grid}>
            {/* FINTECH */}
            <Link href="/industries/fintech" className={styles.card}>
              <img src="/solutions.png" alt="Fintech" />
              <div className={styles.overlay}>
                <h3>FinTech</h3>
                <span>Explore →</span>
              </div>
            </Link>

            {/* RETAIL */}
            <Link href="/industries/retail" className={styles.card}>
              <img src="/solutions2.png" alt="Retail" />
              <div className={styles.overlay}>
                <h3>Retail</h3>
                <span>Explore →</span>
              </div>
            </Link>

            {/* ADD MORE */}
            <div className={styles.card}>
              <img src="/team.jpg" alt="Healthcare" />
              <div className={styles.overlay}>
                <h3>Healthcare</h3>
                <span>Coming Soon</span>
              </div>
            </div>
          </div>
        </section>

        <div className={styles.links}>
  <Link href="/solutions" className={styles.linkItem}>
    Explore Our Services →
  </Link>

  <Link href="/contact" className={styles.linkItem}>
    Contact Us →
  </Link>
</div>
      </main>
    </>
  );
}
