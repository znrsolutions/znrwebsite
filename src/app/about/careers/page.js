import styles from "./careers.module.scss";

export default function Careers() {
  return (
    <main className={styles.careers}>

    {/* HERO */}
<section className={styles.hero}>

  <div className={styles.heroTop}>
    <h1>Start your journey</h1>

    <p>
      Grow your career as we grow. Join the team that's changing IT services
    </p>

    <button className={styles.heroBtn}>
      Explore Open Positions
    </button>
  </div>

  <div className={styles.heroImage}>
    <img src="/careers.png" alt="Careers" />
  </div>

</section>


<section className={styles.growth}>

  <div className={styles.growthContainer}>

    {/* TITLE */}
    <h2>ZNR is a place to grow</h2>

    {/* CONTENT */}
    <div className={styles.content}>

      <p>
        ZNR Technology was created for individuals who wish to develop purposefully.
        As we grow into web, digital, ERP, and automation solutions, we remain
        committed to creating a high impact, lean team that is motivated by execution,
        ownership, and clarity. At ZNR, growth is about developing capability,
        responsibility, and long-term value rather than just scale.
      </p>

      <p>
        You’ll work in fast paced, goal oriented teams where technology is used to
        achieve actual business objectives. Each position provides clear accountability,
        ongoing learning, and practical exposure to worthwhile projects. ZNR is a place
        where your growth is deliberate and your work genuinely matters if you’re driven
        by problem solving and developing solutions that have a significant impact.
      </p>

    </div>

  </div>

</section>
      {/* BENEFITS */}
      <section className={styles.benefits}>
        <h2>Why work with us?</h2>

        <div className={styles.grid}>
          <div className={styles.card}>Flexible work culture</div>
          <div className={styles.card}>International exposure</div>
          <div className={styles.card}>Work-life balance</div>
          <div className={styles.card}>Health insurance</div>
          <div className={styles.card}>Learning & certifications</div>
          <div className={styles.card}>Team activities</div>
        </div>
      </section>


<section className={styles.join}>

  <div className={styles.joinContainer}>

    {/* LEFT */}
    <div className={styles.left}>
      <h2>
        Come on board! <br />
        Learn more about <br />
        ZNR
      </h2>

      <p>
        At ZNR, we’re creating a team rather than just technology. You’ll
        collaborate with motivated experts on worthwhile projects that have a
        significant impact on expanding companies.
      </p>

      <p>
        We would love to have you join us if you’re searching for a setting where
        you can learn, take responsibility, and develop with a group of people
        who value progress, clarity, and teamwork.
      </p>
    </div>

    {/* RIGHT */}
    <div className={styles.right}>
      <img src="/career.png" alt="Team working" />
    </div>

  </div>

</section>


      {/* JOB LISTINGS */}
<section className={styles.jobs}>
  <h2>Open Positions</h2>

  <div className={styles.jobsGrid}>

    {[1,2,3,4,5,6].map((item) => (
      <div className={styles.jobCard} key={item}>

        <h3>Enterprise Sales Manager - REF 0110</h3>

        <div className={styles.meta}>
          <span>Full - Time</span>
          <span>On-site</span>
        </div>

        <button>Apply</button>

      </div>
    ))}

  </div>
</section>

      {/* CTA */}
      <section className={styles.cta}>
        <h2>Don’t see a role that fits?</h2>
        <button>Send your CV</button>
      </section>


      <section className={styles.trust}>

  <div className={styles.trustContainer}>

    {/* LEFT IMAGE */}
    <div className={styles.image}>
      <img src="/career2.png" alt="Team" />
    </div>

    {/* RIGHT CONTENT */}
    <div className={styles.content}>
      <h2>You can count on us</h2>

      <p>
        We provide a supportive and fulfilling work environment with a flexible
        hybrid culture, international exposure, and a strong focus on work-life
        balance. Our employees enjoy health benefits, learning opportunities,
        recognition programs, and engaging recreational, gym, and sports activities.
      </p>
    </div>

  </div>

</section>

    </main>
  );
}