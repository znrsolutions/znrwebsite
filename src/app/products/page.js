import styles from "./products.module.scss";

export default function Products() {
  return (
    <main className={styles.products}>

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.eyebrow}>Our Products</span>
          <h1>Built for the Future of <em>Finance & Commerce</em></h1>
          <p className={styles.heroSub}>
            A suite of powerful products designed to modernize how businesses sell, manage, and trade.
          </p>
          {/* <button className={styles.heroBtn}>Explore Our Products</button> */}
        </div>
      </section>

      {/* PRIME CRM */}
      <section className={styles.featured}>
        <div className={`${styles.featuredContainer} ${styles.reverse}`}>
          <div className={styles.image}>
            <img src="/products.png" alt="Prime CRM" />
          </div>
          <div className={styles.content}>
            <span className={styles.tag} style={{ color: "#DB02DD", background: "rgba(219,2,221,0.08)", border: "1px solid rgba(219,2,221,0.2)" }}>CRM</span>
            <h2>PRIME CRM</h2>
            <p>
              Prime CRM is a sales-focused customer relationship management platform that combines AI calling, built-in VoIP infrastructure, and seamless CRM integrations to help businesses manage customer interactions more efficiently.
            </p>
            <p>
              The platform enables teams to handle calls, automate follow-ups, track performance through real-time analytics, and close deals faster without switching between multiple tools.
            </p>
            <ul className={styles.featureList}>
              <li>AI-powered calling & VoIP</li>
              <li>Real-time analytics dashboard</li>
              <li>Seamless CRM integrations</li>
              <li>Automated follow-ups</li>
            </ul>
          </div>
        </div>
      </section>

      {/* PRIME HRM */}
      <section className={`${styles.featured} ${styles.alt}`}>
        <div className={styles.featuredContainer}>
          <div className={styles.image}>
            <img src="/prime-hrm.png" alt="Prime HRM" />
          </div>
          <div className={styles.content}>
            <span className={styles.tag} style={{ color: "#82E0D0", background: "rgba(130,224,208,0.08)", border: "1px solid rgba(130,224,208,0.2)" }}>HRM</span>
            <h2>PRIME HRM</h2>
            <p>
              Prime HRM is an end-to-end human resource management solution built to simplify every stage of the employee lifecycle — from onboarding to exit.
            </p>
            <p>
              With powerful tools for payroll processing, attendance tracking, leave management, and performance reviews, Prime HRM gives HR teams everything they need in one place.
            </p>
            <ul className={styles.featureList}>
              <li>Employee onboarding & offboarding</li>
              <li>Payroll & attendance management</li>
              <li>Performance tracking</li>
              <li>Leave & compliance management</li>
            </ul>
          </div>
        </div>
      </section>

      {/* PRIME TRADER */}
      <section className={styles.featured}>
        <div className={`${styles.featuredContainer} ${styles.reverse}`}>

          <div className={styles.image}>
            <div className={styles.comingSoon}>
              <div className={styles.comingSoonInner}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="rgba(56,189,248,0.6)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <span className={styles.comingSoonLabel}>Coming Soon</span>
                <p className={styles.comingSoonSub}>PRIME Trader is launching soon.<br />Stay tuned.</p>
              </div>
            </div>
          </div>

          <div className={styles.content}>
            <span className={styles.tag} style={{ color: "#38BDF8", background: "rgba(56,189,248,0.08)", border: "1px solid rgba(56,189,248,0.2)" }}>TRADER</span>
            <h2>PRIME Trader</h2>
            <p>
              Prime Trader is a next-generation trading platform delivering real-time market data, smart order execution, and advanced analytics for retail and institutional traders.
            </p>
            <p>
              Designed for speed and precision, Prime Trader gives users the tools to make informed decisions, manage risk, and execute trades with confidence across multiple asset classes.
            </p>
            <ul className={styles.featureList}>
              <li>Real-time market data feeds</li>
              <li>Smart order execution engine</li>
              <li>Advanced charting & analytics</li>
              <li>Multi-asset class support</li>
            </ul>
          </div>

        </div>
      </section>

    </main>
  );
}