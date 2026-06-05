import styles from "./bpo.module.scss";

export default function BPOPage() {
  const products = [
    {
      label: "CRM Platform",
      title: "Manage leads, customers, agents, and sales from one system.",
      text: "Our CRM helps businesses organize leads, track follow ups, monitor agent performance, and improve sales conversion through structured pipelines and real-time reporting.",
      features: [
        "Lead allocation",
        "Sales pipeline tracking",
        "Agent performance reports",
        "Follow up management",
      ],
      benefit:
        "Useful for sales teams, BPOs, fintech companies, agencies, and any business that handles customer leads.",
    },
    {
      label: "HRM & ATS Platform",
      title: "Simplify employee management, hiring, attendance, and payroll.",
      text: "Our HRM and ATS solution helps businesses manage recruitment, employee records, attendance, payroll, leave, and internal HR workflows efficiently.",
      features: [
        "Employee management",
        "Attendance tracking",
        "Payroll support",
        "Recruitment pipeline",
      ],
      benefit:
        "Useful for growing businesses that want better control over staff, recruitment, and HR operations.",
    },
    {
      label: "Agera Capital Group",
      title: "A trading platform built for market access and financial growth.",
      text: "Agera Capital Group allows users to access trading opportunities, market tools, financial education, and structured support for modern trading journeys.",
      features: [
        "Trading access",
        "Market insights",
        "Portfolio tools",
        "Trading support",
      ],
      benefit:
        "Useful for individuals, investors, and trading focused communities looking for a professional trading ecosystem.",
    },
    {
      label: "Fintech & Payment Systems",
      title: "Build secure digital payment and financial platforms.",
      text: "We design fintech systems that support wallets, payment gateways, transaction tracking, onboarding, reporting, and secure digital finance workflows.",
      features: [
        "Wallet systems",
        "Payment gateway integration",
        "Transaction monitoring",
        "Financial dashboards",
      ],
      benefit:
        "Useful for fintech startups, financial service providers, retail businesses, and digital platforms.",
    },
    {
      label: "BPO Operations",
      title: "Combine trained teams with technologydriven operations.",
      text: "Our BPO services support customer care, lead management, data processing, CRM administration, back office work, and virtual assistance.",
      features: [
        "Customer support",
        "Lead management",
        "Back office support",
        "Virtual assistance",
      ],
      benefit:
        "Useful for companies that want to reduce workload, increase productivity, and scale operations cost effectively.",
    },
  ];

  const benefits = [
    "Better lead conversion",
    "Improved team productivity",
    "Reduced operational workload",
    "Real time business visibility",
    "Stronger customer management",
    "Automated reporting",
    "Scalable support teams",
    "Technology backed operations",
  ];

  const process = [
    {
      title: "Understand Your Business",
      text: "We analyze your current workflow, team structure, customer journey, and operational challenges.",
    },
    {
      title: "Recommend The Right System",
      text: "We identify whether your business needs CRM, HRM, fintech systems, trading tools, BPO teams, or a custom solution.",
    },
    {
      title: "Implement & Customize",
      text: "We configure the platform, workflows, reports, permissions, and operational process based on your business.",
    },
    {
      title: "Train & Support Your Team",
      text: "We help your team use the system effectively while providing ongoing technical and operational support.",
    },
    {
      title: "Monitor & Improve",
      text: "We track performance, reporting, productivity, and customer outcomes to continuously improve operations.",
    },
  ];

  return (
    <main className={styles.bpoPage}>
    <section className={styles.hero}>
  <div className={styles.heroContent}>
    <div className={styles.heroBadge}>
      TECHNOLOGY POWERED BPO SOLUTIONS
    </div>

    <h1>
      Systems, People & Processes
      <br />
      <span>Built For Modern Businesses</span>
    </h1>

    <p>
      ZNR combines business technology, operational teams, CRM systems,
      HR platforms, fintech solutions, and BPO expertise to help
      organizations scale efficiently and sustainably.
    </p>

    
  </div>
</section>

      <section className={styles.intro}>
        <div className={styles.container}>
          <span className={styles.eyebrow}>Why ZNR BPO</span>

          <h2>More than outsourcing. We give you the technology too.</h2>

          <p>
            Most businesses do not only need people. They need proper systems,
            tracking, reporting, automation, and performance visibility. That is
            why ZNR provides both business software and operational support.
          </p>

          <p>
            Whether you need a CRM, HRM, trading platform, fintech solution, or
            a dedicated BPO team, we help you build the right structure to
            operate, scale, and grow.
          </p>
        </div>
      </section>

      <section className={styles.productsSection} id="products">
        <div className={styles.sectionHeader}>
          <span className={styles.eyebrow}>Our Product Ecosystem</span>
          <h2>Business solutions powered by ZNR technology</h2>
          <p>
            Explore the platforms and services businesses can use to improve
            operations, customer management, finance, HR, and performance.
          </p>
        </div>

        <div className={styles.productGrid}>
          {products.map((item, index) => (
            <div className={styles.productCard} key={item.label}>
              <div className={styles.productTop}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{item.label}</p>
              </div>

              <h3>{item.title}</h3>
              <p className={styles.productText}>{item.text}</p>

              <div className={styles.featureList}>
                {item.features.map((feature) => (
                  <div key={feature}>{feature}</div>
                ))}
              </div>

              <div className={styles.benefitBox}>
                <strong>Why it is useful</strong>
                <p>{item.benefit}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.benefits}>
        <div className={styles.benefitsContent}>
          <span className={styles.eyebrow}>Business Benefits</span>
          <h2>What your business gains with ZNR</h2>
          <p>
            Our solutions are designed to improve control, productivity,
            visibility, and customer outcomes.
          </p>
        </div>

        <div className={styles.benefitsList}>
          {benefits.map((item) => (
            <div key={item}>{item}</div>
          ))}
        </div>
      </section>

      <section className={styles.processSection}>
        <div className={styles.sectionHeader}>
          <span className={styles.eyebrow}>Our Process</span>
          <h2>How we build your operational system</h2>
        </div>

        <div className={styles.timeline}>
          {process.map((item, index) => (
            <div className={styles.timelineItem} key={item.title}>
              <div>{String(index + 1).padStart(2, "0")}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* <section className={styles.cta}>
        <h2>Ready to improve your business operations?</h2>

        <p>
          Partner with ZNR to choose the right platform, build the right team,
          and create a scalable business operation.
        </p>

        <a href="/contact">Talk To Our Team</a>
      </section> */}
    </main>
  );
}