"use client";

import { useEffect, useState } from "react";
import styles from "./applications.module.scss";

export default function AdminApplications() {
  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadApps = async () => {
    try {
      const res = await fetch("/api/applications");
      const data = await res.json();
      setApps(data || []);
    } catch (err) {
      console.error("Error loading applications:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadApps();
  }, []);

  return (
    <div className={styles.page}>
      <h1>Job Applications</h1>

      {/* LOADING */}
      {loading && <p className={styles.loading}>Loading applications...</p>}

      {/* EMPTY */}
      {!loading && apps.length === 0 && (
        <p className={styles.empty}>No applications yet.</p>
      )}

      {/* GRID */}
      <div className={styles.grid}>
        {apps.map((app) => (
          <div key={app.id} className={styles.card}>

            {/* TOP */}
            <div className={styles.cardTop}>
              <h3>
                {app.firstName} {app.lastName}
              </h3>

              <p><b>Job:</b> {app.title}</p>
              <p><b>Email:</b> {app.email}</p>
              <p><b>Phone:</b> {app.phone}</p>
            </div>

            {/* BOTTOM */}
            <div className={styles.cardBottom}>
              <a
                href={app.cv}
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