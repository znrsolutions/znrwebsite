"use client";
import { useState } from "react";
import styles from "./Audit.module.scss";
import CalendlyButton from "@/components/CalendlyButton";
import toast from "react-hot-toast"; // ✅ ADD

import Head from "next/head";

export default function AuditPage() {
  const [url, setUrl] = useState("");
  const [report, setReport] = useState(null);
  const [loading, setLoading] = useState(false);

  const runAudit = async () => {
    // ✅ URL VALIDATION
    if (!url.trim()) {
      toast.error("Enter a URL");
      return;
    }

    // Optional: basic URL format check
    const urlRegex = /^(https?:\/\/)/;
    if (!urlRegex.test(url)) {
      toast.error("Please include http:// or https://");
      return;
    }

    setLoading(true);
    setReport(null);

    const toastId = toast.loading("Running audit...");

    try {
      const res = await fetch("/api/audit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url }),
      });

      const data = await res.json();

      if (data.error) {
        toast.error(data.error, { id: toastId });
        return;
      }

      setReport(data.lighthouseResult.categories);

      toast.success("Audit completed!", { id: toastId });

    } catch (err) {
      toast.error("Something went wrong", { id: toastId });
    } finally {
      setLoading(false);
    }
  };

  // 🎨 Dynamic color
  const getColor = (score) => {
    if (score >= 90) return "#22c55e";
    if (score >= 50) return "#f59e0b";
    return "#ef4444";
  };

 return (
  <>
    <Head>
      <title>Website Audit Tool | Free SEO & Performance Checker</title>

      <meta
        name="description"
        content="Run a free website audit with ZNR Solutions. Analyze performance, SEO, accessibility, and best practices instantly."
      />

      <meta
        name="keywords"
        content="website audit tool, SEO checker, performance audit, page speed test, lighthouse audit"
      />

      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://znrsolutions.com/tools/audit" />

      {/* OPEN GRAPH */}
      <meta property="og:title" content="Website Audit Tool | ZNR Solutions" />
      <meta
        property="og:description"
        content="Check your website performance and SEO instantly with our free audit tool."
      />
      <meta property="og:url" content="https://znrsolutions.com/tools/audit" />
      <meta property="og:image" content="/og-image.png" />

      {/* TWITTER */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Website Audit Tool | ZNR Solutions" />
      <meta
        name="twitter:description"
        content="Run a free SEO and performance audit in seconds."
      />
      <meta name="twitter:image" content="/og-image.png" />

      {/* STRUCTURED DATA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "Website Audit Tool",
            applicationCategory: "SEO Tool",
            operatingSystem: "All",
          }),
        }}
      />
    </Head>

    <div className={styles.audit}>
     <h1>Free Website Audit Tool</h1>
     <p className={styles.heroSub2}>
  Analyze your website SEO, performance, accessibility, and best practices
  using our free audit tool powered by advanced insights.
</p>

      {/* INPUT */}
      <div className={styles.inputBox}>
        <input
          type="text"
          placeholder="Enter website URL..."
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button onClick={runAudit} disabled={loading}>
          {loading ? "Running..." : "Run Audit"}
        </button>
      </div>

      {/* 🔥 SKELETON LOADING */}
      {loading && (
        <div className={styles.results}>
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className={styles.card}>
              <div className={styles.skeletonCircle}></div>
              <div className={styles.skeletonText}></div>
            </div>
          ))}
        </div>
      )}

{/* ✅ RESULTS */}
{!loading && report && (
  <div className={styles.results}>
    {Object.entries(report).map(([key, item]) => {
      const score = Math.round(item.score * 100);

      return (
        <div key={key} className={styles.card}>
          <div
            className={styles.circle}
            style={{
              background: `conic-gradient(${getColor(score)} ${score}%, #e5e7eb ${score}%)`
            }}
          >
            <div className={styles.inner}>{score}</div>
          </div>

          <h3>{item.title}</h3>
        </div>
      );
    })}
  </div>
)}


{/* CTA */}
{!loading && report && (
  <div className={styles.cta}>

          <h2>Ready to fix these issues?</h2>
          <p>Let ZNR Solutions improve your website performance</p>

          <div className={styles.btnRow}>
            <CalendlyButton />
          </div>
        </div>
      )}

      
    </div>

    <section className={styles.faq}>
  <h2>Frequently Asked Questions</h2>

  <h3>What does this audit tool check?</h3>
  <p>
    It checks performance, SEO, accessibility, and best practices using
    industry-standard analysis.
  </p>

  <h3>Is this audit tool free?</h3>
  <p>Yes, you can run unlimited audits for free.</p>

  <h3>Does this improve SEO?</h3>
  <p>
    The tool identifies issues. Fixing them improves your search rankings.
  </p>
</section>
    </>
  );
}