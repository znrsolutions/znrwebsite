import styles from "./products.module.scss";

/* ================= SEO ================= */
export const metadata = {
  title: "ZNR Products | CRM, HRM & Trading Platforms",
  description:
    "Explore ZNR Solutions products including PRIME CRM, PRIME HRM, and PRIME Trader. Built for fintech, retail, and enterprise businesses.",
  keywords:
    "CRM software, HRM system, trading platform, fintech products, retail software solutions",
  openGraph: {
    title: "ZNR Products",
    description:
      "Discover powerful fintech, HRM, and trading platforms by ZNR Solutions.",
    url: "https://znrsolutions.com/products",
  },
};

export default function Products() {
  return (
    <main className={styles.products}>
      {/* ✅ ADD THIS RIGHT HERE */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            itemListElement: [
              {
                "@type": "Product",
                name: "PRIME CRM",
                description: "AI-powered CRM with VoIP and automation",
              },
              {
                "@type": "Product",
                name: "PRIME HRM",
                description: "Human resource management platform",
              },
              {
                "@type": "Product",
                name: "PRIME Trader",
                description: "Advanced trading platform with analytics",
              },
            ],
          }),
        }}
      />

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.eyebrow}>Our Work</span>
          <h1>Fintech, HRM & Trading <em>Platforms for Modern Businesses</em></h1>

          <p className={styles.heroSub}>
            ZNR Solutions builds CRM, HRM, and trading platforms designed for
            fintech, retail, and enterprise digital transformation.
          </p>
          {/* <p className={styles.heroSub}>
            A suite of powerful products designed to modernize how businesses
            sell, manage, and trade.
          </p> */}
          {/* <button className={styles.heroBtn}>Explore Our Products</button> */}
        </div>
      </section>

      {/* PRIME CRM */}
      <section className={styles.featured}>
        <div className={`${styles.featuredContainer} ${styles.reverse}`}>
          <div className={styles.image}>
            <img
              src="/crm.png"
              alt="Prime CRM fintech customer relationship management platform with AI calling and VoIP"
            />
          </div>
          <div className={styles.content}>
            <span
              className={styles.tag}
              style={{
                color: "#DB02DD",
                background: "rgba(219,2,221,0.08)",
                border: "1px solid rgba(219,2,221,0.2)",
              }}
            >
              CRM
            </span>
            <h2>PRIME CRM</h2>
            <p>
              Prime CRM is a sales focused customer relationship management
              platform that combines AI calling, built in VoIP infrastructure,
              and seamless CRM integrations to help businesses manage customer
              interactions more efficiently.
            </p>
            <p>
              The platform enables teams to handle calls, automate follow ups,
              track performance through real time analytics, and close deals
              faster without switching between multiple tools.
            </p>
            <ul className={styles.featureList}>
              {/* <li>AI powered calling & VoIP</li>
              <li>Real time analytics dashboard</li>
              <li>Seamless CRM integrations</li>
              <li>Automated follow ups</li> */}
            </ul>
          </div>
        </div>
      </section>

      {/* PRIME HRM */}
      <section className={`${styles.featured} ${styles.alt}`}>
        <div className={styles.featuredContainer}>
          <div className={styles.image}>
            <img src="/hrm.png" alt="Prime HRM human resource management system for payroll, attendance, and employee lifecycle management" />
          </div>
          <div className={styles.content}>
            <span
              className={styles.tag}
              style={{
                color: "#82E0D0",
                background: "rgba(130,224,208,0.08)",
                border: "1px solid rgba(130,224,208,0.2)",
              }}
            >
              HRM
            </span>
            <h2>PRIME HRM</h2>
            <p>
              Prime HRM is an end to end human resource management solution
              built to simplify every stage of the employee lifecycle from
              onboarding to exit.
            </p>
            <p>
              With powerful tools for payroll processing, attendance tracking,
              leave management, and performance reviews, Prime HRM gives HR
              teams everything they need in one place.
            </p>
            <ul className={styles.featureList}>
              {/* <li>Employee onboarding & offboarding</li>
              <li>Payroll & attendance management</li>
              <li>Performance tracking</li>
              <li>Leave & compliance management</li> */}
            </ul>
          </div>
        </div>
      </section>




<section className={styles.featured}>
        <div className={`${styles.featuredContainer} ${styles.reverse}`}>
          <div className={styles.image}>
            <img
              src="/agera.png"
              alt="Prime CRM fintech customer relationship management platform with AI calling and VoIP"
            />
          </div>
          <div className={styles.content}>
            <span
              className={styles.tag}
              style={{
                color: "#050642",
                background: "rgba(115, 102, 231, 0.08)",
                border: "1px solid rgba(9, 10, 73, 0.2)",
              }}
            >
              Agera
            </span>
            <h2>Agera Capital Group</h2>
            <p>
              Agera Capital Group is a next generation trading platform delivering real
              time market data, smart order execution, and advanced analytics
              for retail and institutional traders.
            </p>
            <p>
               Designed for speed and precision, Prime Trader gives users the
              tools to make informed decisions, manage risk, and execute trades
              with confidence across multiple asset classes.
            </p>
            <ul className={styles.featureList}>
             {/* <li>Real time market data feeds</li>
              <li>Smart order execution engine</li>
              <li>Advanced charting & analytics</li>
              <li>Multi asset class support</li> */}
            </ul>
          </div>
        </div>
      </section>


      
      {/* PRIME HRM */}
      {/* <section className={`${styles.featured} ${styles.alt}`}>
        <div className={styles.featuredContainer}>
          <div className={styles.image}>
            <img src="/shinrai.png" alt="Prime HRM human resource management system for payroll, attendance, and employee lifecycle management" />
          </div>
          <div className={styles.content}>
            <span
              className={styles.tag}
              style={{
                color: "#82E0D0",
                background: "rgba(130,224,208,0.08)",
                border: "1px solid rgba(130,224,208,0.2)",
              }}
            >
              Shinrai
            </span>
            <h2>Shinrai Wallet</h2>
            <p>
             Built on the Ethereum network for lower gas fees and efficiency. Create custodial wallets with full access that can be integrated to a platform, game or receive payments with a link.
            </p>
            <p>
             You can make your client deposit or withdraw without any limitations from 1 USDT to 10,000 USDT with no minimum or maximum transaction limitation.
            </p>
            <ul className={styles.featureList}> */}
              {/* <li>Employee onboarding & offboarding</li>
              <li>Payroll & attendance management</li>
              <li>Performance tracking</li>
              <li>Leave & compliance management</li> */}
            {/* </ul>
          </div>
        </div>
      </section> */}

      {/* 🔥 INTERNAL LINKS */}
<div className={styles.links}>
  <a href="/solutions" className={styles.linkItem}>
    Explore Our Solutions →
  </a>

  <a href="/industries" className={styles.linkItem}>
    Industries We Serve →
  </a>
</div>
    </main>
  );
}
