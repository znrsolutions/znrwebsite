import styles from "./privacy.module.scss";

import Head from "next/head";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy | ZNR Solutions</title>

        <meta
          name="description"
          content="Read the privacy policy of ZNR Solutions to understand how we collect, use, and protect your personal information."
        />

        <meta
          name="keywords"
          content="privacy policy ZNR Solutions, data protection, personal data policy, website privacy"
        />

        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://znrsolutions.com/privacy-policy" />

        {/* OPEN GRAPH */}
        <meta property="og:title" content="Privacy Policy | ZNR Solutions" />
        <meta
          property="og:description"
          content="Learn how ZNR Solutions protects your personal data and privacy."
        />
        <meta
          property="og:url"
          content="https://znrsolutions.com/privacy-policy"
        />
        <meta property="og:image" content="/og-image.png" />

        {/* TWITTER */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Privacy Policy | ZNR Solutions" />
        <meta
          name="twitter:description"
          content="Understand how we handle your personal data at ZNR Solutions."
        />
        <meta name="twitter:image" content="/og-image.png" />

        {/* STRUCTURED DATA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "Privacy Policy",
              url: "https://znrsolutions.com/privacy-policy",
            }),
          }}
        />
      </Head>

      <main className={styles.privacy}>
        {/* TITLE */}
        <section className={styles.hero}>
          <h1>Privacy Policy</h1>

          <h2 style={{ display: "none" }}>
            Privacy Policy of ZNR Solutions – Data Protection & Personal
            Information
          </h2>
          <span>for ZNR Solutions</span>
        </section>

        {/* CONTENT */}
        <section className={styles.content}>
          <h2>What Information We Collect</h2>
          <p className={styles.heroSub2}>
            This privacy policy explains how ZNR Solutions collects, uses, and
            protects your personal data in compliance with data protection
            standards.
          </p>

          <ul>
            <li>Name</li>
            <li>Address</li>
            <li>Email address(es)</li>
            <li>Telephone number(s)</li>
            <li>Date of birth (where appropriate)</li>
          </ul>

          <p>
            This information is collected to provide our services, communicate
            effectively, and respond to your inquiries.
          </p>

          <h2>How We Collect Information</h2>
          <p>
            We collect information whenever you interact with us directly,
            including:
          </p>

          <ul>
            <li>Contacting us regarding our services or activities</li>
            <li>Registering as a client or subscriber</li>
            <li>
              Sending or receiving information through our website or
              communication channels
            </li>
          </ul>

          <p>
            We may also receive information about you from third parties, but
            only if you have given them permission to share it. We may collect
            information about you whenever you interact with us. For example,
            when you contact us, register our activities, register as a
            supporter, send or receive information or sign a petition, you
            specifically and knowingly provide us with your personal
            information. We may also receive information about you from third
            parties but only if you have given them permission to share your
            information.
          </p>

          <h2>Confidentiality</h2>
          <p>
            We are committed to protecting your privacy. However, ZNR is not
            responsible for the privacy practices of websites not owned or
            managed by us, including third-party websites linked through our
            site.
          </p>

          <h2>Making a complaint</h2>
          <p>
            If you have concerns about how your personal information is handled,
            please contact us at tech@znrsolutions.com with the details of your
            complaint. We will review and investigate your concern to ensure the
            proper procedures have been followed.
          </p>

          <p>
            We aim to complete investigations within 15 working days of
            receiving your complaint. In some cases, the process may take
            longer. If you remain unsatisfied with the response, you may
            escalate your concern to the relevant data protection authorities.
          </p>

          <p>
            If you are not satisfied with the response, please contact us at
            tech@znrsolutions.com with the details explaining your concerns. We
            will review your complaint and investigate if the right process have
            been followed and respond back to you as appropriate. We aim to
            complete this investigation within 15 working days of receiving your
            complaint, however, in some cases it may take longer. If you are
            still unsatisfied with the response, you may contact us.
          </p>

          <h2>Contact Information</h2>
          <p>
            For questions about this Privacy Policy or how your personal data is
            used, please contact us at:
          </p>

          <p>
            Email: tech@znrsolutions.com <br />
            Address: 400 Sri Sumanatissa Mawatha, Colombo 01300, Sri Lanka
          </p>
        </section>
        <div className={styles.links}>
          <Link href="/contact" className={styles.linkItem}>
            Contact Us →
          </Link>

          <Link href="/terms" className={styles.linkItem}>
            Terms of Service →
          </Link>
        </div>
      </main>
    </>
  );
}
