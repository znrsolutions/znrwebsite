import styles from "./privacy.module.scss";

export default function PrivacyPolicy() {
  return (
    <main className={styles.privacy}>

      {/* TITLE */}
      <section className={styles.hero}>
        <h1>Privacy Policy</h1>
        <span>for ZNR LLC</span>
      </section>

      {/* CONTENT */}
      <section className={styles.content}>

        <h2>What Information We Collect</h2>
        <p>
          When you interact with ZNR, we may collect personal information including, but not limited to:
        </p>

        <ul>
          <li>Name</li>
          <li>Address</li>
          <li>Email address(es)</li>
          <li>Telephone number(s)</li>
          <li>Date of birth (where appropriate)</li>
        </ul>

        <p>
          This information is collected to provide our services, communicate effectively, and respond to your inquiries.
        </p>

        <h2>How We Collect Information</h2>
        <p>
          We collect information whenever you interact with us directly, including:
        </p>

        <ul>
          <li>Contacting us regarding our services or activities</li>
          <li>Registering as a client or subscriber</li>
          <li>Sending or receiving information through our website or communication channels</li>
        </ul>

        <p>
          We may also receive information about you from third parties, but only if you have given them permission to share it.
          We may collect information about you whenever you interact with us. For example, when you contact us, register our
          activities, register as a supporter, send or receive information or sign a petition, you specifically and knowingly
          provide us with your personal information. We may also receive information about you from third parties – but only
          if you have given them permission to share your information.
        </p>

        <h2>Confidentiality</h2>
        <p>
          We are committed to protecting your privacy. However, ZNR is not responsible for the privacy practices of websites
          not owned or managed by us, including third-party websites linked through our site.
        </p>

        <h2>Making a complaint</h2>
        <p>
          If you have concerns about how your personal information is handled, please contact us at
          tech@znrsolutions.com with the details of your complaint. We will review and investigate your concern to ensure
          the proper procedures have been followed.
        </p>

        <p>
          We aim to complete investigations within 15 working days of receiving your complaint. In some cases, the process
          may take longer. If you remain unsatisfied with the response, you may escalate your concern to the relevant data
          protection authorities.
        </p>

        <p>
          If you are not satisfied with the response, please contact us at konstruktion@email.com with the details explaining
          your concerns. We will review your complaint and investigate if the right process have been followed and respond back
          to you as appropriate. We aim to complete this investigation within 15 working days of receiving your complaint,
          however, in some cases it may take longer. If you are still unsatisfied with the response, you may contact us.
        </p>

        <h2>Contact Information</h2>
        <p>
          For questions about this Privacy Policy or how your personal data is used, please contact us at:
        </p>

        <p>
          Email: tech@znrsolutions.com <br />
          Address: 400 Sri Sumanatissa Mawatha, Colombo 01300, Sri Lanka
        </p>

      </section>

    </main>
  );
}