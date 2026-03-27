import styles from "./retail.module.scss";

export default function Retail() {
  return (
    <main className={styles.retail}>

    {/* HERO */}
<section className={styles.hero}>
  <h1>Retail</h1>
  <p>The latest insights, ideas and perspectives at Surge.</p>
</section>

{/* IMAGE */}
<section className={styles.heroImage}>
  <img src="/retail.png" alt="Retail" />
</section>

    
      {/* INFO */}
      <section className={styles.info}>
        <div className={styles.container}>

          <div className={styles.left}>
            <h2>Retail Solutions Tailored for Your Business</h2>
          </div>

          <div className={styles.right}>
            <p>
              We help retail businesses create seamless omnichannel experiences.
              From e-commerce platforms to in-store systems, our solutions ensure
              consistent customer engagement across all touchpoints.
            </p>

            <p>
              Our retail platforms are designed to scale, optimize operations,
              and improve customer satisfaction while driving measurable growth.
            </p>
          </div>

        </div>
      </section>

      <section className={styles.features}>

  <div className={styles.grid}>

    {[1,2,3,4,5,6].map((item) => (
      <div className={styles.card} key={item}>

        <div className={styles.icon}></div>

        <div className={styles.content}>
          <h3>POS System Integration</h3>
          <p>
            Seamless, fast, and reliable POS solutions for in-store efficiency.
          </p>
        </div>

      </div>
    ))}

  </div>

</section>

  

{/* HOW IT WORKS HEADER */}
<section className={styles.stepsHeader}>
  <h2>How it Works</h2>
  <p>The latest insights, ideas and perspectives at Surge.</p>
</section>

{/* STEPS */}
<section className={styles.stepsLine}>

  <div className={styles.container}>

    <div className={styles.timeline}>

      {[1,2,3,4].map((step) => (
        <div className={styles.step} key={step}>

          {/* NUMBER */}
          <div className={styles.circle}>{step}</div>

          {/* TEXT */}
          <h3>Understand Your Business</h3>
          <p>
            We analyze your retail operations and identify key needs.
          </p>

        </div>
      ))}

    </div>

  </div>

</section>


    

    </main>
  );
}