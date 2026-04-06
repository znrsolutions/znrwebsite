"use client";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

import styles from "./careers.module.scss";

export default function Careers() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  // 🔥 FETCH JOBS
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch("/api/jobs");
        const data = await res.json();
        setJobs(data);
      } catch (err) {
        console.error("Failed to load jobs");
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  return (
    <>
      <Head>
        <title>Careers at ZNR Solutions | Jobs in IT, Fintech & Software</title>

        <meta
          name="description"
          content="Join ZNR Solutions and build your career in fintech, retail technology, cybersecurity, and software development."
        />

        <meta
          name="keywords"
          content="IT jobs Sri Lanka, software careers, fintech jobs, cybersecurity jobs, developer jobs, careers ZNR Solutions"
        />

        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://znrsolutions.com/careers" />

        {/* OPEN GRAPH */}
        <meta property="og:title" content="Careers at ZNR Solutions" />
        <meta
          property="og:description"
          content="Explore job opportunities in fintech, software, and cybersecurity at ZNR Solutions."
        />
        <meta property="og:url" content="https://znrsolutions.com/careers" />
        <meta property="og:image" content="/og-image.png" />

        {/* TWITTER */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Careers at ZNR Solutions" />
        <meta
          name="twitter:description"
          content="Join ZNR Solutions and grow your career in technology."
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
              hiringOrganization: {
                "@type": "Organization",
                name: "ZNR Solutions",
              },
            }),
          }}
        />
      </Head>

      <main className={styles.careers}>
        {/* HERO */}
        <section className={styles.hero}>
          <div className={styles.heroTop}>
            <h1 onDoubleClick={() => (window.location.href = "/admin/login")}>
              Start your journey
            </h1>

            <h2 style={{ display: "none" }}>
              Careers at ZNR Solutions – Jobs in Fintech, Software &
              Cybersecurity
            </h2>

            <p className={styles.heroSub2}>
              Explore job opportunities in fintech, software development,
              cybersecurity, and retail technology at ZNR Solutions.
            </p>
            {/* 🔥 Scroll to jobs */}
            <button
              className={styles.heroBtn}
              onClick={() =>
                document
                  .getElementById("jobs-section")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Explore Open Positions
            </button>
          </div>

          <div className={styles.heroImage}>
            <Image
              src="/careers.png"
              alt="Careers at ZNR Solutions technology team"
              width={1200}
              height={330}
            />
          </div>
        </section>

        {/* GROWTH */}
        <section className={styles.growth}>
          <div className={styles.growthContainer}>
            <h2>ZNR is a place to grow</h2>

            <div className={styles.content}>
              <p>
                ZNR Technology was created for individuals who wish to develop
                purposefully. As we grow into web, digital, ERP, and automation
                solutions, we remain committed to creating a high impact, lean
                team that is motivated by execution, ownership, and clarity.
              </p>

              <p>
                You’ll work in fast paced, goal oriented teams where technology
                is used to achieve actual business objectives. Each position
                provides clear accountability, ongoing learning, and practical
                exposure to worthwhile projects.
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

        {/* JOIN */}
        <section className={styles.join}>
          <div className={styles.joinContainer}>
            <div className={styles.left}>
              <h2>
                Come on board! <br />
                Learn more about <br />
                ZNR
              </h2>

              <p>
                At ZNR, we’re creating a team rather than just technology.
                You’ll collaborate with motivated experts on worthwhile
                projects.
              </p>
            </div>

            <div className={styles.right}>
              <img src="/career.png" alt="Team working" />
            </div>
          </div>
        </section>

        {/* 🔥 JOB LISTINGS (DYNAMIC) */}
     <section className={styles.jobs}>
  <h2 className={styles.title}>Open Positions</h2>

  <div className={styles.jobsGrid}>

    {/* ✅ EMPTY STATE */}
    {jobs.length === 0 && !loading && (
      <p style={{ textAlign: "center", marginTop: "40px" }}>
        No open positions at the moment.
      </p>
    )}

    {/* JOB LIST */}
    {jobs.map((job) => (
      <div className={styles.jobCard} key={job.id}>
        <div className={styles.left}>
          <h3>{job.title}</h3>

          <div className={styles.meta}>
            <span className={styles.badge}>{job.type}</span>
            <span className={styles.badgeOutline}>{job.location}</span>
          </div>
        </div>

        <Link href={`/resources/careers/${job.id}`}>
          <button className={styles.applyBtn}>Apply →</button>
        </Link>
      </div>
    ))}

  </div>
</section>

        {/* CTA */}
        <section className={styles.cta}>
          <h2>Don’t see a role that fits?</h2>
          <p>Send us your CV and we’ll reach out when a role matches you.</p>

          <form
            className={styles.cvForm}
            onSubmit={async (e) => {
              e.preventDefault();

              const formData = new FormData(e.target);

              const res = await fetch("/api/cv", {
                method: "POST",
                body: formData,
              });

              const data = await res.json();

              if (data.success) {
                toast.success("✅ CV submitted successfully!");
                e.target.reset();
              } else {
                toast.error("❌ Failed to submit CV");
              }
            }}
          >
            {/* NAME */}
            <input name="name" placeholder="Your Name" required />

            {/* EMAIL */}
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />

            {/* 🔥 MESSAGE (NEW) */}
            <textarea
              name="message"
              placeholder="Tell us about yourself (optional)"
              rows="4"
            />

            {/* FILE */}
            <input type="file" name="cv" accept=".pdf,.doc,.docx" required />

            <button type="submit">Upload CV</button>
          </form>
        </section>

        {/* TRUST */}
        <section className={styles.trust}>
          <div className={styles.trustContainer}>
            <div className={styles.image}>
              <img src="/career2.png" alt="Team" />
            </div>

            <div className={styles.content}>
              <h2>You can count on us</h2>

              <p>
                We provide a supportive and fulfilling work environment with a
                flexible hybrid culture, international exposure, and strong
                work-life balance.
              </p>
            </div>
          </div>
        </section>
        <div className={styles.links}>
  <Link href="/solutions" className={styles.linkItem}>
    Explore Our Services →
  </Link>

  <Link href="/blog" className={styles.linkItem}>
    Read Our Blog →
  </Link>
</div>
      </main>
    </>
  );
}
