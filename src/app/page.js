import styles from "./page.module.scss";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.home}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.overlay}></div>

        <div className={styles.container}>
          <h1>
            ZNR Solutions Takes You From <br />
            <span>concept to Launch</span>
          </h1>
        </div>
      </section>

      <section className={styles.about}>
        <div className={styles.wrapper}>
          {/* LEFT */}
          <div className={styles.left}>
            <h2>Who we are and our mission</h2>

            <p>
              ZNR Solutions is a forward-thinking technology company bringing
              together innovators, engineers, and strategists to build impactful
              digital solutions.
            </p>

            <p>
              We help businesses and organizations transform ideas into scalable
              products, delivering clarity and efficiency from concept to
              launch.
            </p>

            <p>
              Our mission is to make advanced technology accessible to
              businesses that are shaping the future.
            </p>

            <Link href="/about">
              <button>Learn More About Us</button>
            </Link>
          </div>

          {/* RIGHT */}
          <div className={styles.right}>
            <img src="/team.jpg" alt="Team" />
          </div>
        </div>
      </section>

      <section className={styles.projects}>
        <div className={styles.container}>
          <h2>Our Projects</h2>

          <div className={styles.grid}>
            {/* CARD */}
            <div className={styles.card}>
              <img src="/p1.png" alt="Evolute" />
              <h3>Evolute</h3>
              <p>
                Evolute is a business consulting and outsourcing solutions
                provider based in Sri Lanka helping organizations improve
                operational efficiency.
              </p>
            </div>

            <div className={styles.card}>
              <img src="/p2.png" alt="MR Events" />
              <h3>Mr Events</h3>
              <p>
                MR Events is an event management platform that showcases
                services for corporate events, product launches, and concerts.
              </p>
            </div>

            <div className={styles.card}>
              <img src="/p3.png" alt="Chain Reclaim" />
              <h3>Chain Reclaim</h3>
              <p>
                Blockchain-based fund recovery service helping victims of crypto
                scams recover lost digital assets.
              </p>
            </div>

            <div className={styles.card}>
              <img src="/p4.png" alt="Book My Tables" />
              <h3>Book My Tables</h3>
              <p>
                Online restaurant booking platform helping businesses manage
                reservations and customers book tables easily.
              </p>
            </div>

            <div className={styles.card}>
              <img src="/p5.png" alt="Minerva" />
              <h3>Minerva</h3>
              <p>
                Business consulting and digital solutions platform improving
                operational efficiency and sustainable growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.ctaContainer}>
          <h2>
            Let’s map out your team needs, technologies, and timelines <br />
            together and see how we can accelerate your growth
          </h2>

          <button>Schedule a 15 minute call</button>
        </div>
      </section>

      <section className={styles.blog}>
        <div className={styles.container}>
          <h2>
            The latest from <br />
            <span>Creative Software</span>
          </h2>

          <div className={styles.grid}>
            <a
              href="https://www.linkedin.com/posts/znr-solutions-pvt-ltd_webdevelopment-webdesign-digitaltransformation-activity-7424436198082977792-qZ-F?utm_source=share&utm_medium=member_desktop&rcm=ACoAAGTvwAoBGN7FPhMJrTntAh5qJcdeaREDUFg"
              target="_blank"
              className={styles.card}
            >
              <img src="/blog.jpg" alt="" />
              <p>
                Scalable web solutions aren’t a luxury they’re a necessity for modern brands.
              </p>

              <div className={styles.footer}>
                <span>ZNR Solutions</span>
                <small>Feb 4</small>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/posts/znr-solutions-pvt-ltd_happynewyear-socialmediamarketing-digitalmarketing-activity-7412125381576699904-IQ7b?utm_source=share&utm_medium=member_desktop&rcm=ACoAAGTvwAoBGN7FPhMJrTntAh5qJcdeaREDUFg"
              target="_blank"
              className={styles.card}
            >
              <img src="/case.jpg" alt="" />
              <p>Happy New Year 2026</p>

              <div className={styles.footer}>
                <span>ZNR Solutions</span>
                <small>Dec 17</small>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/posts/znr-solutions-pvt-ltd_socialmediastrategy-digitalmarketing-brandgrowth-activity-7428040842214572032-NUl_?utm_source=share&utm_medium=member_desktop&rcm=ACoAAGTvwAoBGN7FPhMJrTntAh5qJcdeaREDUFg"
              target="_blank"
              className={styles.card}
            >
              <img src="/download.jpg" alt="" />
              <p>Effective social media management goes beyond consistent posting it requires strategy, insight, and measurable execution.</p>

              <div className={styles.footer}>
                <span>ZNR Solutions</span>
                <small>July 30</small>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/posts/znr-solutions-pvt-ltd_digitalmarketing-b2bmarketing-growthstrategy-activity-7422537555914706945-lmFQ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAGTvwAoBGN7FPhMJrTntAh5qJcdeaREDUFg"
              target="_blank"
              className={styles.card}
            >
              <img src="/team1.jpg" alt="" />
              <p>Digital marketing goes beyond running ads it’s about building visibility, driving qualified leads, and creating sustainable growth.</p>

              <div className={styles.footer}>
                <span>ZNR Solutions</span>
                <small>July 22</small>
              </div>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
