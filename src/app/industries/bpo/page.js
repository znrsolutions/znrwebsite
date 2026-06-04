import styles from "./bpo.module.scss";

export default function BPOPage() {
  return (
    <main className={styles.bpoPage}>
      <section className={styles.hero}>
        <div className={styles.heroOverlay}></div>

        <div className={styles.heroContent}>
          <span>BPO Solutions</span>

          <h1>
            Business Process Outsourcing for modern companies.
          </h1>

          <p>
            We help businesses streamline customer support, back-office
            operations, data processing and virtual assistance with reliable,
            scalable and cost-efficient outsourcing solutions.
          </p>
        </div>
      </section>

      <section className={styles.services}>
        <div className={styles.sectionHeader}>
          <h2>What We Provide</h2>

          <p>
            Our BPO solutions are designed to reduce operational pressure while
            improving speed, accuracy and customer experience.
          </p>
        </div>

        <div className={styles.serviceGrid}>
          {[
            "Customer Support",
            "Back Office Operations",
            "Data Entry & Processing",
            "Lead Management",
            "Virtual Assistance",
            "CRM & Admin Support",
          ].map((item, index) => (
            <div className={styles.serviceCard} key={index}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{item}</h3>
              <p>
                Structured, professional and reliable support to help your
                business operate smoothly every day.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.process}>
        <div className={styles.sectionHeader}>
          <h2>Our BPO Process</h2>

          <p>
            We follow a simple, transparent process to understand your workflow
            and build the right support model.
          </p>
        </div>

        <div className={styles.processGrid}>
          {[
            "Understand Operations",
            "Create Workflow",
            "Assign Team",
            "Quality Monitoring",
            "Scale & Optimize",
          ].map((item, index) => (
            <div className={styles.processItem} key={index}>
              <div>{String(index + 1).padStart(2, "0")}</div>
              <h3>{item}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.cta}>
        <h2>Ready to optimize your operations?</h2>

        <p>
          Let us help you build a reliable BPO support system for your business.
        </p>

        <a href="/contact">Talk to Us</a>
      </section>
    </main>
  );
}