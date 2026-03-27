import styles from "./industries.module.scss";
import Link from "next/link";

export default function Industries() {
  return (
    <main className={styles.industries}>

      {/* HERO */}
      <section className={styles.hero}>
        <h1>Industries</h1>
        <p>
          We deliver tailored digital solutions across industries to help
          businesses innovate, scale, and lead.
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

    </main>
  );
}