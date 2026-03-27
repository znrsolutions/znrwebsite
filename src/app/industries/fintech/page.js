import styles from "./fintech.module.scss";

export default function Fintech() {
  return (
    <main className={styles.fintech}>

  {/* HERO */}
<section className={styles.hero}>

  <div className={styles.heroText}>
    <h1>Financial Technologies</h1>

    <p>
      Leverage elite engineering expertise trusted by billion dollar
      companies and government institutions to build systems that serve
      millions daily.
    </p>
  </div>

  <div className={styles.heroImage}>
    <img src="/fintech.png" alt="Fintech" />
  </div>

</section>


{/* INFO SECTION */}
<section className={styles.info}>

  <div className={styles.infoContainer}>

    {/* LEFT */}
    <div className={styles.left}>
      <h2>Comprehensive IT services for businesses</h2>
    </div>

    {/* RIGHT */}
    <div className={styles.right}>
      <p>
        When we say comprehensive, we mean comprehensive. ZNR has the experience
        and expertise to provide an excellent experience across spheres, for truly
        holistic IT.
      </p>

      <p>
        Some MSPs struggle to offer consulting or network services. But your
        organization needs the entire experience to stop worrying about IT. Learn
        more about our services below.
      </p>
    </div>

  </div>

</section>

 {/* TEAM SECTION */}
<section className={styles.team}>

  <div className={styles.container}>

    {/* ROW 1 */}
    <div className={styles.row}>

      {/* LEFT TEXT */}
      <div className={styles.text}>
        <h2>Full stack engineering team</h2>
        <p>
          Our full stack engineering team combines expertise across front end,
          back end, and everything in between to build seamless, scalable applications.
          From concept to deployment, we create intuitive, high performance systems
          that millions rely on, delivering solutions that support business growth
          and adapt to evolving needs.
        </p>
      </div>

      {/* RIGHT IMAGE */}
      <div className={styles.image}>
        <img src="/fintech1.png" alt="Engineering Team" />
      </div>

    </div>



  </div>

</section>
{/* SALES SECTION */}
<section className={styles.sales}>

  <div className={styles.salesContainer}>

    {/* IMAGE LEFT */}
    <div className={styles.image}>
      <img src="/fintech2.png" alt="Sales Team" />
    </div>

    {/* TEXT RIGHT */}
    <div className={styles.text}>
      <h2>Sales team</h2>
      <p>
        We design, implement, and manage cloud infrastructures that empower
        organizations to scale rapidly and securely. Our cloud solutions enable
        billion-dollar enterprises and government agencies to operate with
        flexibility, optimize resources, and stay resilient, handling demands
        in even the most data-intensive environments.
      </p>
    </div>

  </div>

</section>

{/* HR SECTION */}
<section className={styles.hr}>

  <div className={styles.hrContainer}>

    {/* TEXT LEFT */}
    <div className={styles.text}>
      <h2>HR team</h2>
      <p>
        We design, implement, and manage cloud infrastructures that empower
        organizations to scale rapidly and securely. Our cloud solutions enable
        billion-dollar enterprises and government agencies to operate with
        flexibility, optimize resources, and stay resilient, handling demands
        in even the most data-intensive environments.
      </p>
    </div>

    {/* IMAGE RIGHT */}
    <div className={styles.image}>
      <img src="/fintech3.png" alt="HR Team" />
    </div>

  </div>

</section>

      {/* FEATURES */}
      <section className={styles.features}>
        <h2>Our FinTech Capabilities</h2>

        <div className={styles.grid}>

          <div className={styles.card}>
            <h3>Secure Payments</h3>
            <p>Fast, reliable and secure transaction systems.</p>
          </div>

          <div className={styles.card}>
            <h3>Blockchain Integration</h3>
            <p>Decentralized solutions for transparency and trust.</p>
          </div>

          <div className={styles.card}>
            <h3>AI & Risk Analysis</h3>
            <p>Advanced analytics for fraud detection and insights.</p>
          </div>

          <div className={styles.card}>
            <h3>Digital Banking</h3>
            <p>Modern platforms for seamless user experiences.</p>
          </div>

        </div>
      </section>

    

    </main>
  );
}