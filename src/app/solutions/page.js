"use client";

import styles from "./solutions.module.scss";
import { useState } from "react";


export default function Solutions() {
    const [activeService, setActiveService] = useState(null); // ✅ CORRECT
 
  const services = [
    {
      icon: (
        <svg
          width="28"
          height="28"
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
      title: "Web Development",
      desc: "Custom web applications and platforms built with modern frameworks scalable, fast, and tailored to your business goals.",
      details:
        "We build scalable web platforms using React, Next.js, and modern architectures. Includes admin panels, dashboards, APIs, and integrations.",
      color: "#3b82f6",
    },
    {
      icon: (
        <svg
          width="28"
          height="28"
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
      title: "Mobile App Development",
      desc: "iOS and Android applications designed for performance and user experience, from concept to App Store launch.",
      details:
        "We build scalable web platforms using React, Next.js, and modern architectures. Includes admin panels, dashboards, APIs, and integrations.",
      color: "#6366f1",
    },
    {
      icon: (
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5" />
          <path d="M2 12l10 5 10-5" />
        </svg>
      ),
      title: "Fintech Solutions",
      desc: "Payment gateways, digital wallets, trading infrastructure, and financial data platforms built for security and scale.",
      details:
        "We build scalable web platforms using React, Next.js, and modern architectures. Includes admin panels, dashboards, APIs, and integrations.",
      color: "#DB02DD",
    },
    {
      icon: (
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      ),
      title: "Retail Technology",
      desc: "POS systems, inventory management, e commerce platforms, and customer loyalty solutions for modern retailers.",
      details:
        "We build scalable web platforms using React, Next.js, and modern architectures. Includes admin panels, dashboards, APIs, and integrations.",
      color: "#f59e0b",
    },
    {
      icon: (
        <svg
          width="28"
          height="28"
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
      title: "CRM & HRM Platforms",
      desc: "Custom built or configured CRM and HRM systems that streamline sales pipelines, HR workflows, and team productivity.",
      details:
        "We build scalable web platforms using React, Next.js, and modern architectures. Includes admin panels, dashboards, APIs, and integrations.",
      color: "#10b981",
    },
    {
      icon: (
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
        </svg>
      ),
      title: "Digital Marketing",
      desc: "SEO, paid media, social media strategy, and content marketing to grow your brand and generate qualified leads.",
      details:
        "We build scalable web platforms using React, Next.js, and modern architectures. Includes admin panels, dashboards, APIs, and integrations.",
      color: "#38BDF8",
    },
    {
      icon: (
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        </svg>
      ),
      title: "Cloud & Infrastructure",
      desc: "Cloud migration, DevOps pipelines, server management, and scalable infrastructure for high availability systems.",
      details:
        "We build scalable web platforms using React, Next.js, and modern architectures. Includes admin panels, dashboards, APIs, and integrations.",
      color: "#6366f1",
    },
    {
      icon: (
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
      title: "Cybersecurity",
      desc: "Security audits, penetration testing, data encryption, and compliance frameworks to protect your business and customers.",
      details:
        "We build scalable web platforms using React, Next.js, and modern architectures. Includes admin panels, dashboards, APIs, and integrations.",
      color: "#ef4444",
    },
    {
      icon: (
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="3" />
          <path d="M19.07 4.93a10 10 0 010 14.14M4.93 4.93a10 10 0 000 14.14" />
        </svg>
      ),
      title: "IT Consulting",
      desc: "Strategic technology consulting to align your IT investments with business objectives and drive measurable outcomes.",
      details:
        "We build scalable web platforms using React, Next.js, and modern architectures. Includes admin panels, dashboards, APIs, and integrations.",
      color: "#f59e0b",
    },
  ];

  const reasons = [
    {
      title: "Finance First Thinking",
      desc: "Every solution we build is designed with financial compliance, data security, and transaction integrity at its core.",
    },
    {
      title: "End to End Delivery",
      desc: "From discovery and design to development, deployment, and ongoing support we own the full lifecycle.",
    },
    {
      title: "Retail & Commerce DNA",
      desc: "Deep expertise in retail technology means we understand the complexity of inventory, POS, and customer experience.",
    },
    {
      title: "Agile & Transparent",
      desc: "Weekly sprints, real time updates, and clear communication so you always know where your project stands.",
    },
  ];

  return (
  <main className={styles.solutions}>
    
    {/* HERO */}
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <span className={styles.eyebrow}>Services & Solutions</span>
        <h1>
          Technology that <em>Powers</em> Your Business
        </h1>
        <p>
          ZNR is your trusted partner for fintech, retail technology, and
          digital transformation built to save you time, reduce costs, and
          accelerate growth.
        </p>
      </div>
    </section>

    {/* SERVICES GRID */}
    <section className={styles.servicesSection}>
      <div className={styles.sectionHeader}>
        <span className={styles.eyebrow}>What We Do</span>
        <h2>Our Core Services</h2>
        <p>
          A comprehensive suite of technology services tailored for finance,
          retail, and beyond.
        </p>
      </div>

      <div className={styles.grid}>
        {services.map((s, i) => (
          <div
            className={styles.card}
            key={i}
            onClick={() => setActiveService(s)} // ✅ CLICK HANDLER
          >
            <div
              className={styles.iconWrap}
              style={{ color: s.color, background: `${s.color}14` }}
            >
              {s.icon}
            </div>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>

    {/* WHY ZNR */}
    <section className={styles.why}>
      <div className={styles.whyContainer}>
        <div className={styles.whyLeft}>
          <span className={styles.eyebrow}>Why ZNR</span>
          <h2>Built different, for a reason</h2>
          <p>
            We don't just build software we build systems that drive
            revenue, reduce risk, and scale with your ambitions.
          </p>
        </div>
        <div className={styles.whyRight}>
          {reasons.map((r, i) => (
            <div className={styles.reasonCard} key={i}>
              <div className={styles.reasonNum}>0{i + 1}</div>
              <div>
                <h4>{r.title}</h4>
                <p>{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* 🔥 MODAL (ADD HERE - VERY IMPORTANT) */}
    {activeService && (
      <div
        className={styles.modalOverlay}
        onClick={() => setActiveService(null)}
      >
        <div
          className={styles.modal}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className={styles.close}
            onClick={() => setActiveService(null)}
          >
            ✕
          </button>

          <div
            className={styles.modalIcon}
            style={{ color: activeService.color }}
          >
            {activeService.icon}
          </div>

          <h2>{activeService.title}</h2>
          <p>{activeService.desc}</p>

          <div className={styles.details}>
            {activeService.details}
          </div>

          {/* CTA BUTTON */}
          <button
            className={styles.ctaBtn}
            onClick={() => window.location.href = "/contact"}
          >
            Get This Service
          </button>
        </div>
      </div>
    )}

  </main>
);
}
