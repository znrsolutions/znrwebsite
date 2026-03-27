"use client";
import styles from "./about.module.scss";

export default function About() {
  return (
    <main className={styles.aboutPage}>

      {/* HERO */}
      <section className={styles.hero}>
        <h1>About Us</h1>
        <p>
          We build innovative digital products and scalable solutions that help
          businesses grow faster and smarter.
        </p>
      </section>


{/* BEGINNING SECTION */}
<section className={styles.beginning}>

  <div className={styles.container}>

    {/* LEFT IMAGES */}
    <div className={styles.images}>

      <img src="/about1.png" className={styles.bigImg} />

      <div className={styles.smallImages}>
        <img src="/about2.png" />
        <img src="/about3.png" />
      </div>

    </div>

    {/* RIGHT CONTENT */}
    <div className={styles.content}>
      <h2>The Beginning</h2>

      <p>
        ZNR Tech was founded on the straightforward but impactful observation
        that great ideas don’t work when they are implemented slowly or unclearly.
      </p>

      <p>
        What began as a targeted web and digital solutions project swiftly developed
        into a comprehensive tech partner for startups, SMEs, and expanding businesses.
        Our objective was clear from the start: eliminate complexity, bridge communication gaps,
        and provide technology that genuinely advances businesses.
      </p>

      <div className={styles.buttons}>
        <button className={styles.primary}>Our Services</button>
        <button className={styles.secondary}>Life at Creative</button>
      </div>
    </div>

  </div>

</section>



{/* MISSION SECTION (SINGLE IMAGE) */}
<section className={styles.missionSingle}>

  <div className={styles.container}>

    {/* LEFT IMAGE */}
    <div className={styles.image}>
      <img src="/about8.png" alt="Mission" />
    </div>

    {/* RIGHT CONTENT */}
    <div className={styles.content}>
      <h2>Mission</h2>

      <p>
        Our goal at ZNR Tech is to maximise impact while simplifying
        technology for businesses.
      </p>

      <p>
        We work to close the gap between vision and execution by fusing
        technical know how, strategic thinking, and proactive communication
        to produce dependable, scalable, and quick solutions.
      </p>

      <p>We do more than just construct projects.</p>
      <p>We construct growth supporting systems.</p>
    </div>

  </div>

</section>


{/* GLOBAL SECTION */}
<section className={styles.global}>

  <div className={styles.container}>

    {/* LEFT CONTENT */}
    <div className={styles.content}>
      <h2>We are global</h2>

      <p>
        ZNR Tech works with companies looking for a long term tech partner rather than just a vendor,
        startups transforming ideas into products ready for the market, manufacturers and service providers
        optimising operations, and SMEs looking to professionalise and scale.
      </p>

      <p>
        While we adjust to different industries, our standards remain constant.
      </p>
    </div>

    {/* RIGHT IMAGES */}
   {/* RIGHT IMAGE */}
          <div className={styles.image0}>
            <img src="/about9.png" alt="Team" />
          </div>

  </div>

</section>


{/* CULTURE STATEMENT */}
<section className={styles.culture}>
  <div className={styles.container}>
    <h2>
      At ZNR, our culture is based on four fundamental characteristics that affect how we collaborate,
      deliver, and develop.
    </h2>
  </div>
</section>




{/* CULTURE CARDS */}
<section className={styles.cultureCards}>

  <div className={styles.container}>

    <div className={styles.grid}>

      <div className={styles.card}>
        <h3>Passionate</h3>
        <p>
          Building technology that has a significant impact on business is what motivates us.
          Every solution is tackled with purpose, accuracy, and a dedication to quantifiable outcomes.
        </p>
      </div>

      <div className={styles.card}>
        <h3>Respectful</h3>
        <p>
          We value the time, objectives, and financial commitments of our clients. We establish
          partnerships based on trust and long-term value by communicating clearly, being transparent,
          and acting professionally.
        </p>
      </div>

      <div className={styles.card}>
        <h3>Ownership</h3>
        <p>
          From comprehending the requirements to carrying them out and delivering them, we take full
          responsibility for every project. Instead of handoffs, our clients depend on us for accountability.
        </p>
      </div>

      <div className={styles.card}>
        <h3>Unified</h3>
        <p>
          We function as an extension of the teams of our clients. We guarantee smooth cooperation and
          reliable results by coordinating strategy, technology, and execution.
        </p>
      </div>

    </div>

  </div>

</section>



  

  {/* BETTER TOGETHER */}
<section className={styles.better}>

  <div className={styles.container}>

    {/* LEFT CONTENT */}
    <div className={styles.content}>
      <h2>
        Better together
      </h2>

      <p>
        We think teamwork produces the best outcomes. At ZNR Tech, we collaborate closely with our
        clients as strategic partners, coordinating teams, concepts, and implementation to effectively
        address challenging problems.
      </p>

      <p>
        Every interaction is based on shared ownership, open communication, and trust. We turn problems
        into organised solutions that provide clarity, momentum, and quantifiable advancement when we
        collaborate as a cohesive team.
      </p>
    </div>

    {/* RIGHT IMAGE */}
    <div className={styles.image}>
      <img src="/about10.png" alt="Teamwork" />
    </div>

  </div>

</section>





    </main>
  );
}