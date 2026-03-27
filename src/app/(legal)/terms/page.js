import styles from "./terms.module.scss";

export default function Terms() {
  return (
    <main className={styles.terms}>

      {/* HERO */}
      <section className={styles.hero}>
        <h1>Terms of Service</h1>
        <span>for ZNR LLC</span>
      </section>

      {/* CONTENT */}
      <section className={styles.content}>

        <h2>1. Introduction</h2>
        <p>
          Welcome to ZNR Solutions. By accessing or using our website and services,
          you agree to be bound by these Terms of Service. If you do not agree,
          please do not use our services.
        </p>

        <h2>2. Use of Services</h2>
        <p>
          You agree to use our services only for lawful purposes and in a way that
          does not infringe the rights of others or restrict their use of the service.
        </p>

        <h2>3. User Responsibilities</h2>
        <ul>
          <li>Provide accurate information</li>
          <li>Maintain confidentiality of your account</li>
          <li>Not misuse or disrupt our services</li>
        </ul>

        <h2>4. Intellectual Property</h2>
        <p>
          All content, branding, and materials on this website are owned by ZNR Solutions
          and may not be copied, distributed, or used without permission.
        </p>

        <h2>5. Limitation of Liability</h2>
        <p>
          ZNR Solutions is not liable for any indirect, incidental, or consequential damages
          arising from the use of our services.
        </p>

        <h2>6. Termination</h2>
        <p>
          We reserve the right to suspend or terminate access to our services at any time,
          without prior notice, for violations of these terms.
        </p>

        <h2>7. Changes to Terms</h2>
        <p>
          We may update these Terms of Service from time to time. Continued use of the website
          means you accept the updated terms.
        </p>

        <h2>8. Contact Us</h2>
        <p>
          If you have any questions regarding these Terms, please contact us:
          <br />
          <b>tech@znrsolutions.com</b>
        </p>

      </section>

    </main>
  );
}