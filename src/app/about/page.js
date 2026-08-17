"use client";
import styles from "./about.module.scss";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <>
      <Head>
        <title>
          About ZNR Solutions | Fintech, Retail & Technology Experts
        </title>

        <meta
          name="description"
          content="Learn about ZNR Solutions, a technology company specializing in fintech, retail systems, cybersecurity, and digital transformation."
        />

        <meta
          name="keywords"
          content="about ZNR Solutions, IT company Sri Lanka, fintech company, software development company, technology partner"
        />

        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://znrsolutions.com/about" />

        {/* OPEN GRAPH */}
        <meta property="og:title" content="About ZNR Solutions" />
        <meta
          property="og:description"
          content="Discover ZNR Solutions, your trusted partner in fintech, retail, and software development."
        />
        <meta property="og:url" content="https://znrsolutions.com/about" />
        <meta property="og:image" content="/og-image.png" />

        {/* TWITTER */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About ZNR Solutions" />
        <meta
          name="twitter:description"
          content="Learn about our mission, culture, and expertise in building scalable technology solutions."
        />
        <meta name="twitter:image" content="/og-image.png" />

        {/* STRUCTURED DATA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "ZNR Solutions",
              url: "https://znrsolutions.com",
            }),
          }}
        />
      </Head>

      <main className={styles.aboutPage}>
        {/* HERO */}
        <section className={styles.hero}>
          <h1>About Us</h1>

          <h2 style={{ display: "none" }}>
            About ZNR Solutions – Fintech, Retail & Software Technology Company
          </h2>
          <p className={styles.heroSub2}>
            ZNR Solutions is a technology company specializing in fintech
            platforms, retail systems, cybersecurity, and scalable software
            development for modern businesses.
          </p>
        </section>
{/* VISION & MISSION */}
<section className={styles.visionMission}>
  <div className={styles.visionMissionContainer}>
    
    <div className={styles.infoCard}>
      <span className={styles.cardLabel}>OUR VISION</span>

      <h2>Company Vision</h2>

      <p>
       Build fintech solutions that simplify life with software solutions powered by Blockchain and traditional payment gateways.
      </p>
    </div>

    <div className={styles.infoCard}>
      <span className={styles.cardLabel}>OUR MISSION</span>

      <h2>Company Mission</h2>

      <p>
     At ZNR, we focus on building the next generation of fintech solutions, breaking the limitations created by traditional payment methods.
      </p>

      <p>
        We're working with a mission of leading fintech solutions. Leading fintech solutions making the future of the fintech space transparent.
      </p>
    </div>

  </div>
</section>

        {/* MISSION SECTION (SINGLE IMAGE) */}
        {/* <section className={styles.missionSingle}>
          <div className={styles.container}> */}
        {/* LEFT IMAGE */}
        {/* <div className={styles.image}>
              <img src="/about8.png" alt="Mission" />
            </div> */}

        {/* RIGHT CONTENT */}
        {/* <div className={styles.content}>
              <h2>Mission</h2>

              <p>
                Our goal at ZNR Tech is to maximise impact while simplifying
                technology for businesses.
              </p>

              <p>
                We work to close the gap between vision and execution by fusing
                technical know how, strategic thinking, and proactive
                communication to produce dependable, scalable, and quick
                solutions.
              </p>

              <p>We do more than just construct projects.</p>
              <p>We construct growth supporting systems.</p>
            </div>
          </div>
        </section> */}

        {/* <section className={styles.team}>
          <div className={styles.teamContainer}>
            <h2>Our Team</h2>

            <div className={styles.teamGrid}>
              {[
                {
                  img: "/founder.jpg",
                  title: "Amman Lantra",
                  text: "Chief Executive Officer",
                },
                {
                  img: "/azni.png",
                  title: "Siddique Azni",
                  text: "Chief Operations Officer",
                },
                {
                  img: "/azeez.png",
                  title: "Azeez Sanoon",
                  text: "Chief Financial Officer",
                },
                {
                  img: "/sumar.png",
                  title: "Sumar Fawaz",
                  text: "Chief Technology Officer",
                },
                {
                  img: "/mustafa.png",
                  title: "Mustafa Asif",
                  text: "Senior Business Analyst",
                },
              ].map((item, index) => (
                <div className={styles.teamCard} key={index}>
                  <img src={item.img} alt={item.title} />

                  <div className={styles.teamContent}>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        {/* CULTURE STATEMENT */}
        <section className={styles.culture}>
          <div className={styles.container}>
            <h2>
              At ZNR, our culture is based on four fundamental characteristics
              that affect how we collaborate, deliver, and develop.
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
                  Building technology that has a significant impact on business
                  is what motivates us. Every solution is tackled with purpose,
                  accuracy, and a dedication to quantifiable outcomes.
                </p>
              </div>

              <div className={styles.card}>
                <h3>Respectful</h3>
                <p>
                  We value the time, objectives, and financial commitments of
                  our clients. We establish partnerships based on trust and
                  long-term value by communicating clearly, being transparent,
                  and acting professionally.
                </p>
              </div>

              <div className={styles.card}>
                <h3>Ownership</h3>
                <p>
                  From comprehending the requirements to carrying them out and
                  delivering them, we take full responsibility for every
                  project. Instead of handoffs, our clients depend on us for
                  accountability.
                </p>
              </div>

              <div className={styles.card}>
                <h3>Unified</h3>
                <p>
                  We function as an extension of the teams of our clients. We
                  guarantee smooth cooperation and reliable results by
                  coordinating strategy, technology, and execution.
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
              <h2>Better together</h2>

              <p>
                We think teamwork produces the best outcomes. At ZNR Tech, we
                collaborate closely with our clients as strategic partners,
                coordinating teams, concepts, and implementation to effectively
                address challenging problems.
              </p>

              <p>
                Every interaction is based on shared ownership, open
                communication, and trust. We turn problems into organised
                solutions that provide clarity, momentum, and quantifiable
                advancement when we collaborate as a cohesive team.
              </p>
            </div>

            {/* RIGHT IMAGE */}
            <div className={styles.image}>
              <img src="/about10.png" alt="Teamwork" />
            </div>
          </div>
        </section>

        <div className={styles.links}>
          <Link href="/solutions" className={styles.linkItem}>
            Explore Our Services →
          </Link>

          <Link href="/careers" className={styles.linkItem}>
            Join Our Team →
          </Link>
        </div>
      </main>
    </>
  );
}
