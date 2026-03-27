import styles from "./blog.module.scss";

export default function Blog() {
  return (
    <main className={styles.blog}>

    {/* HERO */}
<section className={styles.hero}>

  <div className={styles.top}>
    <h1>Blog</h1>
    <p>The latest insights, ideas and perspectives at Surge.</p>
  </div>

  <div className={styles.image}>
    <img src="/blog.png" alt="Blog" />
  </div>

</section>


<section className={styles.info}>

  <div className={styles.infoContainer}>

    {/* LEFT */}
    <div className={styles.left}>
      <h2>
        Comprehensive IT <br />
        services for businesses
      </h2>
    </div>

    {/* RIGHT */}
    <div className={styles.right}>
      <p>
        When we say comprehensive, we mean comprehensive. ZNR has the experience
        and expertise to provide an excellent experience across spheres, for
        truly holistic IT.
      </p>

      <p>
        Some MSPs struggle to offer consulting or network services. But your
        organization needs the entire experience to stop worrying about IT.
        Learn more about our services below.
      </p>
    </div>

  </div>

</section>

      {/* BLOG GRID */}
      <section className={styles.gridSection}>
        <div className={styles.grid}>

          {/* CARD */}
          <div className={styles.card}>
            <img src="/blog.jpg" alt="" />
            <h3>How AI is transforming businesses</h3>
            <p>Discover how artificial intelligence is reshaping industries.</p>
            <span>Read more →</span>
          </div>

          <div className={styles.card}>
            <img src="/case.jpg" alt="" />
            <h3>Scaling your startup the right way</h3>
            <p>Learn strategies to grow your business sustainably.</p>
            <span>Read more →</span>
          </div>

          <div className={styles.card}>
            <img src="/download (3).jpg" alt="" />
            <h3>Cloud computing explained</h3>
            <p>Everything you need to know about cloud infrastructure.</p>
            <span>Read more →</span>
          </div>

          <div className={styles.card}>
            <img src="/team.jpg" alt="" />
            <h3>Team collaboration in tech</h3>
            <p>How strong teams build powerful digital products.</p>
            <span>Read more →</span>
          </div>

        </div>
      </section>

      {/* <section className={styles.contact}> */}

  {/* <div className={styles.contactContainer}> */}

    {/* LEFT */}
    {/* <div className={styles.left}>
      <h2>
        Do you still have <br />
        questions? We'll <br />
        help you!
      </h2>

      <p>
        Get a free consultation to learn how to use digital technologies to benefit yourself,
        your team or your community. Our experts will help you understand, advise on solutions
        and support you in your first steps.
      </p>
    </div> */}

    {/* RIGHT FORM */}
    {/* <div className={styles.formBox}>
      <form>

        <input type="text" placeholder="Your name:" />

        <div className={styles.phone}>
          <span>🇺🇸</span>
          <input type="text" placeholder="+1 201-555-0123" />
        </div>

        <input type="email" placeholder="Your email address:" />

        <input type="text" placeholder="Your question or suggestion:" />

        <label className={styles.checkbox}>
          <input type="checkbox" />
          <span>I agree to the processing of personal data</span>
        </label>

        <button type="submit">SEND</button>

      </form>
    </div>

  </div>

</section> */}

    </main>
  );
}