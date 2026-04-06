import styles from "./retail.module.scss";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function Retail() {
  const features = [
    {
      color: "#10b981",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      ),
      title: "POS & Checkout Systems",
      desc: "Seamless, fast, and reliable point of sale solutions that handle high transaction volumes with zero downtime.",
    },
    {
      color: "#3b82f6",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="9" cy="21" r="1" />
          <circle cx="20" cy="21" r="1" />
          <path d="M1 1h4l2.68 13.39a2 2 0 001.98 1.61h9.72a2 2 0 001.98-1.61L23 6H6" />
        </svg>
      ),
      title: "E-Commerce Platforms",
      desc: "Custom built online storefronts with payment gateway integration, product management, and conversion optimization.",
    },
    {
      color: "#f59e0b",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
        </svg>
      ),
      title: "Inventory Management",
      desc: "Real time stock tracking, automated reorder alerts, and multi location inventory visibility across your entire operation.",
    },
    {
      color: "#DB02DD",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
        </svg>
      ),
      title: "Customer Loyalty Programs",
      desc: "Points, rewards, and referral systems that increase retention, repeat purchases, and lifetime customer value.",
    },
    {
      color: "#6366f1",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
      ),
      title: "Retail Analytics",
      desc: "Sales dashboards, customer behaviour insights, and performance reporting to drive smarter business decisions.",
    },
    {
      color: "#38BDF8",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="5" y="2" width="14" height="20" rx="2" />
          <line x1="12" y1="18" x2="12.01" y2="18" />
        </svg>
      ),
      title: "Omnichannel Experience",
      desc: "Unified retail experiences across in store, mobile, and online channels keeping your brand consistent everywhere.",
    },
  ];

  const steps = [
    {
      title: "Understand Your Business",
      desc: "We deep dive into your retail operations, customer journey, and pain points to identify where technology can make the biggest impact.",
    },
    {
      title: "Design the Solution",
      desc: "Our team architects a tailored retail technology solution from system design to UX aligned with your brand and goals.",
    },
    {
      title: "Build & Integrate",
      desc: "We develop and integrate your platform with existing tools POS hardware, payment gateways, ERP systems, and more.",
    },
    {
      title: "Launch & Scale",
      desc: "We deploy your solution, train your team, and provide ongoing support as your retail operation grows.",
    },
  ];

  return (
    <>
      <Head>
        <title>
          Retail Technology Solutions | POS, E-Commerce & Omnichannel Systems
        </title>

        <meta
          name="description"
          content="ZNR Solutions builds retail technology including POS systems, e-commerce platforms, inventory management, and omnichannel retail solutions."
        />

        <meta
          name="keywords"
          content="retail technology, POS systems, ecommerce platforms, inventory management software, retail solutions"
        />

        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://znrsolutions.com/retail" />

        {/* OPEN GRAPH */}
        <meta
          property="og:title"
          content="Retail Technology Solutions | ZNR Solutions"
        />
        <meta
          property="og:description"
          content="Modern retail systems including POS, e-commerce, and omnichannel platforms."
        />
        <meta property="og:url" content="https://znrsolutions.com/retail" />
        <meta property="og:image" content="/og-image.png" />

        {/* TWITTER */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Retail Technology Solutions | ZNR Solutions"
        />
        <meta
          name="twitter:description"
          content="Retail systems for modern businesses including POS and e-commerce."
        />
        <meta name="twitter:image" content="/og-image.png" />

        {/* STRUCTURED DATA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              serviceType: "Retail Technology",
              provider: {
                "@type": "Organization",
                name: "ZNR Solutions",
              },
            }),
          }}
        />
      </Head>

      <main className={styles.retail}>
        {/* HERO */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <span className={styles.eyebrow}>Retail & Commerce</span>
            <h1>
              Retail Technology Solutions for{" "}
              <em>POS, E-Commerce & Omnichannel Growth</em>
            </h1>
            <p className={styles.heroSub2}>
              ZNR Solutions builds POS systems, e-commerce platforms, inventory
              management, and omnichannel retail solutions for modern
              businesses.
            </p>
            {/* <p>
            From in store POS to omnichannel e-commerce, ZNR builds the retail
            infrastructure modern businesses need to sell smarter and grow faster.
          </p> */}
          </div>
        </section>

        {/* HERO IMAGE */}
        <section className={styles.heroImage}>
          <div className={styles.imageWrap}>
            <Image
  src="/retail.png"
  alt="Retail technology system showing POS, e-commerce and inventory management solutions"
  width={1000}
  height={330}
/>
          </div>
        </section>

        {/* INTRO */}
        <section className={styles.intro}>
          <div className={styles.introContainer}>
            <div className={styles.introLeft}>
              <span className={styles.eyebrowDark}>What We Do</span>
              <h2>Retail solutions tailored for your business</h2>
            </div>
            <div className={styles.introRight}>
              <p>
                We help retail businesses create seamless omnichannel
                experiences. From e-commerce platforms to in store systems, our
                solutions ensure consistent customer engagement across all
                touchpoints.
              </p>
              <p>
                Our retail platforms are designed to scale, optimize operations,
                and improve customer satisfaction while driving measurable
                growth.
              </p>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className={styles.features}>
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>Capabilities</span>
            <h2>Everything your retail business needs</h2>
            <p>A full suite of retail technology services built for scale.</p>
          </div>

          <div className={styles.grid}>
            {features.map((f, i) => (
              <div className={styles.card} key={i}>
                <div
                  className={styles.iconWrap}
                  style={{ color: f.color, background: `${f.color}14` }}
                >
                  {f.icon}
                </div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className={styles.howItWorks}>
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>Process</span>
            <h2>How we work with you</h2>
            <p>
              A clear, structured process from first conversation to full
              launch.
            </p>
          </div>

          <div className={styles.timeline}>
            {steps.map((s, i) => (
              <div className={styles.step} key={i}>
                <div className={styles.stepLeft}>
                  <div className={styles.circle}>
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  {i < steps.length - 1 && <div className={styles.line}></div>}
                </div>
                <div className={styles.stepContent}>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <div className={styles.links}>
        <Link href="/solutions" className={styles.linkItem}>
  Explore Our Services →
</Link>

<Link href="/products" className={styles.linkItem}>
  View Our Products →
</Link>
        </div>
      </main>
    </>
  );
}
