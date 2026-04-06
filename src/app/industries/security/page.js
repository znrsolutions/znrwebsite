import Link from "next/link";
import styles from "./security.module.scss";


export const metadata = {
  title: "Web Security Services | ZNR Solutions",
  description:
    "Protect your website from XSS, SQL injection, malware, and downtime. ZNR Solutions provides cybersecurity, website protection, and vulnerability fixes.",

  keywords: [
    "web security services",
    "cybersecurity solutions",
    "XSS protection",
    "SQL injection prevention",
    "website malware removal",
    "WordPress security",
  ],

  openGraph: {
    title: "Web Security Services | ZNR Solutions",
    description:
      "Protect your website from cyber threats, downtime, and vulnerabilities.",
    url: "https://znrsolutions.com/security",
    siteName: "ZNR Solutions",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Web Security Services | ZNR Solutions",
    description:
      "Secure your website against XSS, SQL injection, and malware attacks.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
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
        {/* ✅ ADD STRUCTURED DATA HERE */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Web Security",
            provider: {
              "@type": "Organization",
              name: "ZNR Solutions",
            },
          }),
        }}
      />
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.kicker}>Web Security</span>

<h1>
  Web Security & Cybersecurity Services to <em>Protect Your Website from Attacks & Downtime</em>
</h1>
          {/* <h1>
            Protect your website from <em>attacks & downtime</em>
          </h1> */}
<p className={styles.heroSub2}>
  ZNR Solutions provides web security services including XSS protection,
  SQL injection prevention, malware removal, WordPress security, and
  website uptime protection.
</p>
          {/* <p>
            ZNR Solutions helps businesses secure websites against XSS, SQL
            injection, malware, and unexpected downtime.
          </p> */}

          <div className={styles.actions}>
            <Link href="/tools/audit" className={styles.primaryBtn}>
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

      <div className={styles.links}>
  <Link href="/solutions" className={styles.linkItem}>
    Explore Our Services →
  </Link>

  <Link href="/fintech" className={styles.linkItem}>
    Fintech Security Solutions →
  </Link>
</div>
    </main>
  );
}