import styles from "./products.module.scss";

export default function Products() {
  return (
    <main className={styles.products}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Innovative Digital Products for Modern Businesses</h1>

          <button className={styles.heroBtn}>Explore Our Products</button>
        </div>
      </section>

      {/* FEATURED PRODUCT */}
      <section className={styles.featured}>
        <div className={styles.featuredContainer}>
          {/* IMAGE */}
          <div className={styles.image}>
            <img src="/products.png" alt="Prime CRM" />
          </div>

          {/* CONTENT */}
          <div className={styles.content}>
            <h3>PRIME CRM</h3>

            <p>
              Prime CRM is a sales focused customer relationship management
              platform that combines AI calling, built in VoIP infrastructure,
              and seamless CRM integrations to help businesses manage customer
              interactions more efficiently. The platform enables teams to
              handle calls, automate follow ups, track performance through real
              time analytics, and close deals faster without switching between
              multiple tools. With secure communication technology, high uptime
              reliability, and integration with existing CRM and enterprise
              systems, Prime CRM acts as a complete sales engine designed to
              streamline conversations, improve productivity, and accelerate
              revenue growth.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
