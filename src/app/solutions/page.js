import styles from "./solutions.module.scss";

export default function Solutions() {
  return (
    <main className={styles.solutions}>

   <section className={styles.hero}>

  {/* TOP */}
  <div className={styles.top}>
    <h1>Services & Solutions</h1>

    <p>
      ZNR is your trusted partner for IT management, data security, and cloud
      technology with one goal in mind: to transform the way your business works
      in order to save you time and money.
    </p>
  </div>

  {/* IMAGE */}
  <div className={styles.image}>
    <img src="/solutions.png" alt="Solutions" />
  </div>

  {/* BOTTOM */}
  <div className={styles.bottom}>
    <div className={styles.left}>
      <h2>Comprehensive IT services for businesses</h2>
    </div>

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
   
   {/* SOLUTIONS GRID */}
<section className={styles.solutionsGrid}>

  <h2>Solutions</h2>

  <div className={styles.grid}>

    <div className={styles.card}>
      <img src="/p1.png" alt="" />
      <span>Learn more</span>
    </div>

    <div className={styles.card}>
      <img src="/p2.png" alt="" />
      <span>Learn more</span>
    </div>

    <div className={styles.card}>
      <img src="/p3.png" alt="" />
      <span>Learn more</span>
    </div>

    <div className={styles.card}>
      <img src="/p4.png" alt="" />
      <span>Learn more</span>
    </div>

    <div className={styles.card}>
      <img src="/p5.png" alt="" />
      <span>Learn more</span>
    </div>

    <div className={styles.card}>
      <img src="/products.png" alt="" />
      <span>Learn more</span>
    </div>

  </div>

</section>


{/* WHY CHOOSE */}
<section className={styles.why}>

  <div className={styles.whyContainer}>

    {/* LEFT */}
    <div className={styles.left}>
      <h2>
        Why choose <br />
        services from <br />
        ZNR?
      </h2>

      <p>
        ZNR services provide businesses with an edge over the competition with
        a variety of benefits. Opting for outsourced IT services improves the
        efficiency of business and build trust with customers and clients.
        Our services can be tailored to meet specific needs to match your
        specific goals.
      </p>
    </div>

    {/* RIGHT */}
    <div className={styles.right}>
      <img src="/solutions2.png" alt="Why ZNR" />
    </div>

  </div>

</section>

    

    </main>
  );
}