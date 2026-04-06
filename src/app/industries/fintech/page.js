import styles from "./fintech.module.scss";
import Head from "next/head";

export default function Fintech() {
  const capabilities = [
    {
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="1" y="4" width="22" height="16" rx="2" /><line x1="1" y1="10" x2="23" y2="10" />
        </svg>
      ),
      title: "Payment Infrastructure",
      desc: "End to end payment gateway development supporting multi currency transactions, real time settlement, and PCI-DSS compliance.",
      color: "#3b82f6",
    },
    {
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />
        </svg>
      ),
      title: "Blockchain Solutions",
      desc: "Decentralized applications, smart contracts, and blockchain integration for transparent, tamper proof financial operations.",
      color: "#6366f1",
    },
    {
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
      ),
      title: "Trading Platforms",
      desc: "High frequency trading systems, real time market data feeds, and order execution engines built for speed and precision.",
      color: "#38BDF8",
    },
    {
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
        </svg>
      ),
      title: "AI & Risk Analytics",
      desc: "Machine learning models for fraud detection, credit scoring, risk assessment, and predictive financial analytics.",
      color: "#DB02DD",
    },
    {
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      ),
      title: "Digital Banking",
      desc: "Core banking system modernization, digital wallet development, and neobank platform engineering.",
      color: "#10b981",
    },
    {
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
      title: "Regulatory Compliance",
      desc: "KYC/AML automation, audit trail systems, and compliance frameworks for financial institutions and fintechs.",
      color: "#f59e0b",
    },
    {
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        </svg>
      ),
      title: "Cloud & API Infrastructure",
      desc: "Scalable cloud native architectures and open banking APIs that connect financial ecosystems seamlessly.",
      color: "#6366f1",
    },
    {
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
        </svg>
      ),
      title: "Retail Payment Solutions",
      desc: "POS integrations, buy now pay later infrastructure, and omnichannel checkout experiences for modern retailers.",
      color: "#ef4444",
    },
  ];

  const stats = [
    { num: "$2M+", label: "Transactions Processed" },
    { num: "99.9%", label: "Platform Uptime" },
    { num: "50+", label: "Clients Served" },
    { num: "12+", label: "Countries" },
  ];

  return (
  <>
    <Head>
      <title>Fintech Solutions | Payment Systems, Trading & Banking Platforms</title>

      <meta
        name="description"
        content="ZNR Solutions builds fintech platforms including payment systems, trading platforms, digital banking, and financial infrastructure."
      />

      <meta
        name="keywords"
        content="fintech solutions, payment gateway development, trading platforms, digital banking, financial software"
      />

      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://znrsolutions.com/fintech" />

      {/* OPEN GRAPH */}
      <meta property="og:title" content="Fintech Solutions | ZNR Solutions" />
      <meta
        property="og:description"
        content="Build secure fintech platforms including payments, trading, and banking systems."
      />
      <meta property="og:url" content="https://znrsolutions.com/fintech" />
      <meta property="og:image" content="/og-image.png" />

      {/* TWITTER */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Fintech Solutions | ZNR Solutions" />
      <meta
        name="twitter:description"
        content="Secure fintech platforms for modern financial systems."
      />
      <meta name="twitter:image" content="/og-image.png" />

      {/* STRUCTURED DATA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FinancialService",
            name: "ZNR Fintech Solutions",
            provider: {
              "@type": "Organization",
              name: "ZNR Solutions",
            },
          }),
        }}
      />
    </Head>

    <main className={styles.fintech}>

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.eyebrow}>Financial Technologies</span>
          <h1>Fintech Solutions for Payment <em>Systems,Trading & Digital Banking</em></h1>
          <p className={styles.heroSub2}>
  ZNR Solutions builds fintech platforms including payment gateways, trading systems,
  digital banking, blockchain solutions, and financial infrastructure.
</p>
          {/* <p>
            Leverage elite engineering expertise trusted by businesses worldwide
            to build financial systems that are secure, scalable, and built for
            the demands of modern commerce.
          </p> */}
        </div>

        <div className={styles.statsRow}>
          {stats.map((s, i) => (
            <div className={styles.statCard} key={i}>
              <span className={styles.statNum}>{s.num}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* INTRO */}
      <section className={styles.intro}>
        <div className={styles.introContainer}>
          <div className={styles.introLeft}>
            <span className={styles.eyebrowDark}>What We Build</span>
            <h2>Full spectrum fintech engineering for the modern economy</h2>
          </div>
          <div className={styles.introRight}>
            <p>
              ZNR Solutions combines deep financial domain knowledge with
              cutting edge engineering to build payment systems, trading
              platforms, and banking infrastructure that enterprises and
              startups trust.
            </p>
            <p>
              Whether you're launching a neobank, modernizing a legacy payment
              system, or building a trading engine from scratch our team
              brings the precision and security that financial technology demands.
            </p>
          </div>
        </div>
      </section>

      {/* CAPABILITIES GRID */}
      <section className={styles.capabilities}>
        <div className={styles.sectionHeader}>
          <span className={styles.eyebrow}>Core Capabilities</span>
          <h2>What we specialise in</h2>
          <p>A complete suite of fintech engineering services from payments to compliance.</p>
        </div>

        <div className={styles.grid}>
          {capabilities.map((c, i) => (
            <div className={styles.card} key={i}>
              <div className={styles.iconWrap} style={{ color: c.color, background: `${c.color}14` }}>
                {c.icon}
              </div>
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ENGINEERING TEAM */}
      <section className={styles.teamSection}>
        <div className={styles.teamRow}>
          <div className={styles.teamImage}>
            <img src="/fintech1.png" alt="Fintech engineering team building payment and trading platforms" />
          </div>
          <div className={styles.teamText}>
            <span className={styles.eyebrowDark}>Our Team</span>
            <h2>Full stack engineering built for finance</h2>
            <p>
              Our engineers combine expertise across frontend, backend, DevOps,
              and security to build financial systems that millions rely on.
              From microservices architecture to real-time data pipelines, we
              deliver with precision.
            </p>
            <ul className={styles.checkList}>
              <li>Microservices & event driven architecture</li>
              <li>Real-time data processing pipelines</li>
              <li>Security first engineering practices</li>
              <li>High availability & disaster recovery</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SALES TEAM */}
      <section className={`${styles.teamSection} ${styles.alt}`}>
        <div className={`${styles.teamRow} ${styles.reverse}`}>
          <div className={styles.teamImage}>
            <img src="/fintech2.png" alt="Sales Team" />
          </div>
          <div className={styles.teamText}>
            <span className={styles.eyebrowDark}>Go To Market</span>
            <h2>Sales & partnerships that open doors</h2>
            <p>
              Our commercial team works alongside your business to identify
              the right market opportunities, forge strategic partnerships,
              and accelerate revenue growth through fintech channels.
            </p>
            <ul className={styles.checkList}>
              <li>Fintech partnership development</li>
              <li>Enterprise sales strategy</li>
              <li>Revenue growth consulting</li>
              <li>Market expansion support</li>
            </ul>
          </div>
        </div>
      </section>

      {/* HR TEAM */}
      <section className={styles.teamSection}>
        <div className={styles.teamRow}>
          <div className={styles.teamImage}>
            <img src="/fintech3.png" alt="HR Team" />
          </div>
          <div className={styles.teamText}>
            <span className={styles.eyebrowDark}>People & Culture</span>
            <h2>Talent that drives fintech innovation</h2>
            <p>
              Building great financial technology starts with great people.
              Our HR function ensures we attract, retain, and develop top
              engineering and financial talent so your project is always
              in expert hands.
            </p>
            <ul className={styles.checkList}>
              <li>Specialist fintech talent acquisition</li>
              <li>Continuous learning & development</li>
              <li>Agile team structure & culture</li>
              <li>Dedicated project pods</li>
            </ul>
          </div>
        </div>
      </section>
<div className={styles.links}>
  <a href="/solutions" className={styles.linkItem}>
    Explore Our Services →
  </a>

  <a href="/products" className={styles.linkItem}>
    View Our Products →
  </a>
</div>
    </main>
    </>
  );
}