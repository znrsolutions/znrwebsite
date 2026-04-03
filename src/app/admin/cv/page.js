"use client";

import { useEffect, useState } from "react";
import styles from "./cv.module.scss";

export default function AdminCV() {
  const [cvs, setCvs] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadCVs = async () => {
    try {
      const res = await fetch("/api/cv");
      const data = await res.json();
      setCvs(data || []);
    } catch (err) {
      console.error("Error loading CVs:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCVs();
  }, []);

  return (
    <div className={styles.cvPage}>
      <h1>CV Submissions</h1>

      {/* 🔄 LOADING */}
      {loading && <p className={styles.loading}>Loading CVs...</p>}

      {/* ❌ EMPTY */}
      {!loading && cvs.length === 0 && (
        <p className={styles.empty}>No CV submissions yet.</p>
      )}

      {/* ✅ GRID */}
      <div className={styles.grid}>
        {cvs.map((cv) => (
          <div key={cv.id} className={styles.card}>

            {/* 🔹 TOP CONTENT */}
            <div className={styles.cardTop}>
              <h3>{cv.name || "No Name"}</h3>

              <p>
                <b>Email:</b> {cv.email}
              </p>

              {cv.message && (
                <p className={styles.message}>
                  <b>Message:</b> {cv.message}
                </p>
              )}

              <p className={styles.date}>
                {new Date(cv.created_at).toLocaleString()}
              </p>
            </div>

            {/* 🔹 BUTTON (BOTTOM ALIGNED) */}
            <div className={styles.cardBottom}>
              <a
                href={cv.file}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.download}
              >
                Download CV
              </a>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}