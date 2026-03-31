import Link from "next/link";
import styles from "./security.module.scss";

export const metadata = {
  title: "Web Security Services | ZNR Solutions",
  description:
    "Protect your website from XSS, SQL injection, WordPress downtime, and cyber threats with ZNR Solutions.",
};

const threats = [
  {
    title: "Cross-Site Scripting (XSS)",
    desc: "Injected scripts can steal sessions, redirect users, and damage trust.",
    image: "/security/xss.jpg",
    points: [
      "Input sanitization",
      "Secure form handling",
      "Plugin vulnerability checks",
    ],
  },
  {
    title: "SQL Injection",
    desc: "Unsafe queries can expose sensitive data and break your system.",
    image: "/security/sql.jpg",
    points: [
      "Prepared statements",
      "Database hardening",
      "API security checks",
    ],
  },
  {
    title: "WordPress Downtime",
    desc: "Plugin conflicts, updates, or malware can crash your site.",
    image: "/security/downtime.jpg",
    points: [
      "Backup recovery",
      "Safe rollback",
      "Root cause analysis",
    ],
  },
  {
    title: "Malware & Hacks",
    desc: "Hidden code and backdoors can damage SEO and user trust.",
    image: "/security/malware.jpg",
    points: [
      "Malware cleanup",
      "Core file scanning",
      "Admin audit",
    ],
  },
];

const steps = [
  {
    step: "01",
    title: "Identify Issue",
    desc: "Check hosting, plugins, database, or malware causes.",
  },
  {
    step: "02",
    title: "Secure Website",
    desc: "Block access, enable maintenance mode.",
  },
  {
    step: "03",
    title: "Restore System",
    desc: "Use backups or rollback updates safely.",
  },
  {
    step: "04",
    title: "Fix Root Cause",
    desc: "Patch vulnerabilities and update security.",
  },
];

export default function SecurityPage() {
  return (
    <main className={styles.securityPage}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.kicker}>Web Security</span>

          <h1>
            Protect your website from <em>attacks & downtime</em>
          </h1>

          <p>
            ZNR Solutions helps businesses secure websites against XSS, SQL
            injection, malware, and unexpected downtime.
          </p>

          <div className={styles.actions}>
            <Link href="/contact" className={styles.primaryBtn}>
              Get Security Audit
            </Link>

            {/* <Link href="/tools/audit" className={styles.secondaryBtn}>
              Run Website Audit
            </Link> */}
          </div>
        </div>
      </section>

      {/* THREATS */}
      <section className={styles.section}>
        <h2>Common Website Threats</h2>


   <div className={styles.grid}>
  {threats.map((t, i) => (
    <div key={i} className={styles.card}>
      
      {/* BACKGROUND IMAGE */}
      <div
        className={styles.cardBg}
        style={{ backgroundImage: `url(${t.image})` }}
      />

      {/* CONTENT */}
      <div className={styles.cardContent}>
        <h3>{t.title}</h3>
        <p>{t.desc}</p>

        <ul>
          {t.points.map((p, j) => (
            <li key={j}>{p}</li>
          ))}
        </ul>
      </div>

    </div>
  ))}
</div>

        
      </section>

      {/* RESPONSE */}
      <section className={styles.darkSection}>
        <h2>What to do when your website is down</h2>

        <div className={styles.steps}>
          {steps.map((s, i) => (
            <div key={i} className={styles.step}>
              <span>{s.step}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <h2>Secure your website before it's too late</h2>
        <p>
          Prevent attacks, protect your data, and ensure uptime with ZNR security
          services.
        </p>

        <Link href="/contact" className={styles.primaryBtn}>
          Contact ZNR
        </Link>
      </section>
    </main>
  );
}