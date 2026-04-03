"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import styles from "./jobDetail.module.scss";

export default function JobDetail({ params }) {
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // ✅ LOAD JOB
  useEffect(() => {
    const loadJob = async () => {
      const res = await fetch("/api/jobs");
      const data = await res.json();
      const found = data.find((j) => j.id == params.id);
      setJob(found);
    };

    loadJob();
  }, [params.id]);

  if (!job) return <h1 style={{ padding: "100px" }}>Loading...</h1>;

  // 🔥 PARSE DESCRIPTION
  let desc = {};
  try {
    desc = JSON.parse(job.description);
  } catch {
    desc = {};
  }

  return (
    <main className={styles.jobPage}>

      {/* JOB INFO */}
      <div className={styles.jobHeader}>
        <h1>{job.title}</h1>

        <div className={styles.meta}>
          <span>{job.type}</span>
          <span>{job.location}</span>
        </div>
      </div>

      {/* ABOUT */}
      {desc.about && (
        <div className={styles.section}>
          <h3>About the Role</h3>
          <p>{desc.about}</p>
        </div>
      )}

      {/* RESPONSIBILITIES */}
      {desc.responsibilities?.length > 0 && (
        <div className={styles.section}>
          <h3>What You'll Need To Do:</h3>
          <ul>
            {desc.responsibilities.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      {/* EXPECTATIONS */}
      {desc.expectations?.length > 0 && (
        <div className={styles.section}>
          <h3>What We Expect:</h3>
          <ul>
            {desc.expectations.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      {/* SKILLS */}
      {desc.skills?.length > 0 && (
        <div className={styles.section}>
          <h3>Skills</h3>
          <ul>
            {desc.skills.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      {/* APPLY FORM */}
      <div className={styles.applySection}>
        <h2>Apply for this job</h2>

        <form
          className={styles.form}
          onSubmit={async (e) => {
            e.preventDefault();
            setLoading(true);

            const formData = new FormData(e.target);

            try {
              const res = await fetch("/api/apply", {
                method: "POST",
                body: formData,
              });

              const data = await res.json();

              if (data.success) {
                // ✅ SUCCESS TOAST
                toast.success("Application submitted successfully 🎉", {
                  style: {
                    background: "#1710d8",
                    color: "#fff",
                    borderRadius: "10px",
                  },
                });

                e.target.reset();

                // 🔥 REDIRECT AFTER TOAST
                setTimeout(() => {
                  router.push("/resources/careers");
                }, 1500);
              } else {
                toast.error("Submission failed ❌");
              }

            } catch (err) {
              toast.error("Network error ❌");
            }

            setLoading(false);
          }}
        >
          <input type="hidden" name="job_id" value={job.id} />

          {/* CV */}
          <label>Resume / CV *</label>
          <input type="file" name="cv" required />

          {/* NAME */}
          <label>First Name *</label>
          <input name="firstName" required />

          <label>Last Name *</label>
          <input name="lastName" required />

          {/* PHONE */}
          <label>Phone *</label>
          <input name="phone" required />

          {/* EMAIL */}
          <label>Email *</label>
          <input type="email" name="email" required />

          <button type="submit" disabled={loading}>
            {loading ? "Submitting..." : "Submit Application"}
          </button>
        </form>
      </div>

    </main>
  );
}