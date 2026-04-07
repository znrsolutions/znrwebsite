import styles from "./terms.module.scss";

import Head from "next/head";
import Link from "next/link";

export default function Terms() {
  return (
    <>
      <Head>
        <title>Terms of Service | ZNR Solutions</title>

        <meta
          name="description"
          content="Read the terms of service for ZNR Solutions, outlining the rules, responsibilities, and legal agreements for using our services."
        />

        <meta
          name="keywords"
          content="terms of service ZNR Solutions, website terms, legal terms, service agreement"
        />

        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://znrsolutions.com/terms" />

        {/* OPEN GRAPH */}
        <meta property="og:title" content="Terms of Service | ZNR Solutions" />
        <meta
          property="og:description"
          content="Understand the terms and conditions for using ZNR Solutions services."
        />
        <meta property="og:url" content="https://znrsolutions.com/terms" />
        <meta property="og:image" content="/og-image.png" />

        {/* TWITTER */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Terms of Service | ZNR Solutions" />
        <meta
          name="twitter:description"
          content="Review the terms and conditions of using ZNR Solutions services."
        />
        <meta name="twitter:image" content="/og-image.png" />

        {/* STRUCTURED DATA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "Terms of Service",
              url: "https://znrsolutions.com/terms",
            }),
          }}
        />
      </Head>

      <main className={styles.terms}>
        {/* HERO */}
        <section className={styles.hero}>
          <h1>Terms of Service</h1>

          <h2 style={{ display: "none" }}>
            Terms of Service for ZNR Solutions – Legal Agreement & Conditions
          </h2>
          <span>for ZNR Solutions</span>
        </section>

        {/* CONTENT */}
        <section className={styles.content}>
          <h2>1. Introduction</h2>
          <p>
            Welcome to ZNR Solutions. By accessing or using our website and
            services, you agree to be bound by these Terms of Service. If you do
            not agree, please do not use our services.
          </p>

          <h2>2. Use of Services</h2>
          <p>
            You agree to use our services only for lawful purposes and in a way
            that does not infringe the rights of others or restrict their use of
            the service.
          </p>

          <h2>3. User Responsibilities</h2>
          <ul>
            <li>Provide accurate information</li>
            <li>Maintain confidentiality of your account</li>
            <li>Not misuse or disrupt our services</li>
          </ul>

          <h2>4. Intellectual Property</h2>
          <p>
            All content, branding, and materials on this website are owned by
            ZNR Solutions and may not be copied, distributed, or used without
            permission.
          </p>

          <h2>5. Limitation of Liability</h2>
          <p>
            ZNR Solutions is not liable for any indirect, incidental, or
            consequential damages arising from the use of our services.
          </p>

          <h2>6. Termination</h2>
          <p>
            We reserve the right to suspend or terminate access to our services
            at any time, without prior notice, for violations of these terms.
          </p>

          <h2>7. Changes to Terms</h2>
          <p>
            We may update these Terms of Service from time to time. Continued
            use of the website means you accept the updated terms.
          </p>

          <h2>8. Contact Us</h2>
          <p>
            If you have any questions regarding these Terms, please contact us:
            <br />
            <b>tech@znrsolutions.com</b>
          </p>
        </section>
        <div className={styles.links}>
  <Link href="/contact" className={styles.linkItem}>
    Contact Us →
  </Link>

  <Link href="/privacy-policy" className={styles.linkItem}>
    Privacy Policy →
  </Link>
</div>
      </main>
    </>
  );
}
