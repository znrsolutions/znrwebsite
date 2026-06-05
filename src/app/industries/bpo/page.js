import styles from "./bpo.module.scss";

export default function BPOPage() {
  const services = [
    {
      title: "Customer Support",
      text: "Deliver exceptional customer experiences through email, chat, and voice support.",
    },
    {
      title: "Lead Management",
      text: "Organize, qualify, and manage leads efficiently to improve conversion rates.",
    },
    {
      title: "Back Office Operations",
      text: "Reduce operational workload with reliable administrative support.",
    },
    {
      title: "Data Processing",
      text: "Accurate and secure data entry, validation, and management services.",
    },
    {
      title: "Virtual Assistance",
      text: "Dedicated support professionals for daily operational requirements.",
    },
    {
      title: "CRM Administration",
      text: "Maintain customer records, workflows, and reporting systems effectively.",
    },
  ];

  const metrics = [
    {
      title: "Agent Productivity",
      text: "Track team performance and efficiency.",
    },
    {
      title: "Response Time Monitoring",
      text: "Measure customer response and resolution times.",
    },
    {
      title: "Lead Conversion Reporting",
      text: "Monitor lead performance and sales opportunities.",
    },
    {
      title: "Customer Satisfaction Tracking",
      text: "Identify areas for service improvement.",
    },
    {
      title: "Operational Performance",
      text: "Analyze workflow efficiency and resource utilization.",
    },
    {
      title: "Quality Assurance Monitoring",
      text: "Maintain consistent service standards.",
    },
  ];

  const monitorSteps = [
    {
      title: "Agent Activity Tracking",
      text: "Monitor productivity, attendance, and task completion.",
    },
    {
      title: "Response & Resolution Time",
      text: "Measure service speed and operational efficiency.",
    },
    {
      title: "Customer Interaction Quality",
      text: "Maintain service consistency and compliance.",
    },
    {
      title: "Campaign & Lead Performance",
      text: "Track conversion opportunities and sales effectiveness.",
    },
    {
      title: "Continuous Improvement",
      text: "Use reporting insights to optimize operations.",
    },
  ];

  const systems = [
    {
      title: "CRM Management",
      text: "Salesforce, HubSpot, Zoho, and custom CRMs.",
    },
    {
      title: "Lead Pipeline Management",
      text: "Structured follow-up processes.",
    },
    {
      title: "Reporting & Analytics",
      text: "Real-time performance dashboards.",
    },
    {
      title: "Workflow Automation",
      text: "Reduce repetitive operational tasks.",
    },
  ];

  const process = [
    {
      title: "Understand Operations",
      text: "Analyze business goals and workflows.",
    },
    {
      title: "Design Workflow",
      text: "Create structured operating procedures.",
    },
    {
      title: "Build Dedicated Team",
      text: "Assign trained professionals.",
    },
    {
      title: "Monitor Performance",
      text: "Track KPIs and service quality.",
    },
    {
      title: "Scale & Optimize",
      text: "Continuously improve operational outcomes.",
    },
  ];

  const whyZnr = [
    {
      title: "Performance Driven",
      text: "Focused on measurable business outcomes.",
    },
    {
      title: "Scalable Operations",
      text: "Teams that grow with your business.",
    },
    {
      title: "Technology Enabled",
      text: "Modern reporting and operational systems.",
    },
    {
      title: "Quality Assurance",
      text: "Structured monitoring and improvement.",
    },
    {
      title: "Industry Expertise",
      text: "Experience across fintech, retail, BPO, and enterprise sectors.",
    },
    {
      title: "Cost Efficient",
      text: "Reduce operational costs while maintaining service quality.",
    },
  ];

  const benefits = [
    "Improved customer satisfaction",
    "Faster response times",
    "Better lead conversion rates",
    "Reduced operational overhead",
    "Greater workflow visibility",
    "Higher team productivity",
    "Scalable support operations",
    "Enhanced reporting and analytics",
  ];

  return (
    <main className={styles.bpoPage}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay}></div>

        <div className={styles.heroContent}>
          <span>Business Process Outsourcing</span>

          <h1>Empowering modern businesses with scalable BPO operations.</h1>

          <p>
            From customer support and lead management to reporting and
            operational workflows, ZNR helps businesses build efficient,
            measurable, and cost-effective outsourcing solutions that improve
            customer experience and business performance.
          </p>

          <div className={styles.heroButtons}>
            <a href="/contact">Schedule Consultation</a>
            <a href="#solutions">Explore Solutions</a>
          </div>
        </div>
      </section>

      {/* WHY MODERN BPO */}
      <section className={styles.intro}>
        <div className={styles.container}>
          <span className={styles.eyebrow}>Why Modern BPO Matters</span>

          <h2>More than outsourcing. Built for performance.</h2>

          <p>
            Today&apos;s businesses need more than additional manpower. They
            need visibility, accountability, quality assurance, and measurable
            outcomes.
          </p>

          <p>
            Our BPO solutions combine skilled professionals, structured
            workflows, performance monitoring, and modern technology to help
            organizations operate efficiently while maintaining exceptional
            service standards.
          </p>
        </div>
      </section>

      {/* WHAT WE PROVIDE */}
      <section className={styles.section} id="solutions">
        <div className={styles.sectionHeader}>
          <span className={styles.eyebrow}>What We Provide</span>
          <h2>Comprehensive BPO Solutions</h2>
        </div>

        <div className={styles.cardGrid}>
          {services.map((item, index) => (
            <div className={styles.card} key={item.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PERFORMANCE DASHBOARD */}
      <section className={`${styles.section} ${styles.lightSection}`}>
        <div className={styles.sectionHeader}>
          <span className={styles.eyebrow}>BPO Performance Dashboard</span>
          <h2>Real-Time Visibility Across Operations</h2>

          <p>
            Monitor performance, productivity, and customer interactions through
            structured reporting and operational insights.
          </p>
        </div>

        <div className={styles.cardGrid}>
          {metrics.map((item, index) => (
            <div className={styles.metricCard} key={item.title}>
              <div className={styles.metricIcon}>
                {String(index + 1).padStart(2, "0")}
              </div>

              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHAT WE MONITOR */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.eyebrow}>What We Monitor</span>
          <h2>Operational Intelligence That Drives Growth</h2>
        </div>

        <div className={styles.timeline}>
          {monitorSteps.map((item, index) => (
            <div className={styles.timelineItem} key={item.title}>
              <div>{String(index + 1).padStart(2, "0")}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CRM */}
      <section className={`${styles.section} ${styles.lightSection}`}>
        <div className={styles.sectionHeader}>
          <span className={styles.eyebrow}>CRM & Business Systems</span>
          <h2>Integrated With Your Business Workflow</h2>

          <p>
            Our BPO teams work seamlessly with your existing systems and
            workflows.
          </p>
        </div>

        <div className={styles.systemGrid}>
          {systems.map((item) => (
            <div className={styles.systemCard} key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.eyebrow}>Our Process</span>
          <h2>Our Approach</h2>
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

      {/* WHY ZNR */}
      <section className={`${styles.section} ${styles.lightSection}`}>
        <div className={styles.sectionHeader}>
          <span className={styles.eyebrow}>Why ZNR</span>
          <h2>Why Businesses Choose ZNR</h2>
        </div>

        <div className={styles.cardGrid}>
          {whyZnr.map((item, index) => (
            <div className={styles.card} key={item.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BENEFITS */}
      <section className={styles.benefits}>
        <div className={styles.benefitsContent}>
          <span className={styles.eyebrow}>Key Benefits</span>
          <h2>Business Outcomes You Can Expect</h2>
        </div>

        <div className={styles.benefitsList}>
          {benefits.map((item) => (
            <div key={item}>{item}</div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <h2>Ready to optimize your business operations?</h2>

        <p>
          Partner with ZNR to build reliable, scalable, and performance-driven
          outsourcing solutions tailored to your business goals.
        </p>

        <a href="/contact">Talk To Our Team</a>
      </section>
    </main>
  );
}