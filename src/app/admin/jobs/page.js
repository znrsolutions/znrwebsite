"use client";
import { useEffect, useState } from "react";
import styles from "./jobs.module.scss";

export default function AdminJobs() {
  const [jobs, setJobs] = useState([]);

  const [form, setForm] = useState({
    id: null,
    title: "",
    type: "",
    location: "",
    about: "",
    responsibilities: "",
    expectations: "",
    skills: "",
  });

  // LOAD JOBS
  const loadJobs = async () => {
    const res = await fetch("/api/jobs");
    const data = await res.json();
    setJobs(data);
  };

  useEffect(() => {
    loadJobs();
  }, []);

  // SUBMIT (ADD / UPDATE)
  const handleSubmit = async (e) => {
    e.preventDefault();

    const method = form.id ? "PUT" : "POST";

    await fetch("/api/jobs", {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: form.id,
        title: form.title,
        type: form.type,
        location: form.location,
        description: JSON.stringify({
          about: form.about,
          responsibilities: form.responsibilities.split("\n"),
          expectations: form.expectations.split("\n"),
          skills: form.skills.split("\n"),
        }),
      }),
    });

    // RESET FORM
    setForm({
      id: null,
      title: "",
      type: "",
      location: "",
      about: "",
      responsibilities: "",
      expectations: "",
      skills: "",
    });

    loadJobs();
  };

  // EDIT JOB
  const editJob = (job) => {
    let desc = {};

    try {
      desc = JSON.parse(job.description);
    } catch {
      desc = {};
    }

    setForm({
      id: job.id,
      title: job.title,
      type: job.type,
      location: job.location,
      about: desc.about || "",
      responsibilities: (desc.responsibilities || []).join("\n"),
      expectations: (desc.expectations || []).join("\n"),
      skills: (desc.skills || []).join("\n"),
    });

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // DELETE
  const deleteJob = async (id) => {
    await fetch("/api/jobs", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });

    loadJobs();
  };

  return (
    <div className={styles.jobs}>

      {/* HEADER */}
      <div className={styles.header}>
        <h1>Manage Jobs</h1>
      </div>

      {/* FORM */}
      <form onSubmit={handleSubmit} className={styles.form}>

        <input
          placeholder="Job Title"
          value={form.title}
          onChange={(e) =>
            setForm({ ...form, title: e.target.value })
          }
        />

        <input
          placeholder="Job Type (Full-time, Part-time)"
          value={form.type}
          onChange={(e) =>
            setForm({ ...form, type: e.target.value })
          }
        />

        <input
          placeholder="Location (Remote / On-site)"
          value={form.location}
          onChange={(e) =>
            setForm({ ...form, location: e.target.value })
          }
        />

        {/* ABOUT */}
        <textarea
          placeholder="About the Role"
          value={form.about}
          onChange={(e) =>
            setForm({ ...form, about: e.target.value })
          }
        />

        {/* RESPONSIBILITIES */}
        <textarea
          placeholder="Responsibilities (one per line)"
          value={form.responsibilities}
          onChange={(e) =>
            setForm({ ...form, responsibilities: e.target.value })
          }
        />

        {/* EXPECTATIONS */}
        <textarea
          placeholder="Expectations (one per line)"
          value={form.expectations}
          onChange={(e) =>
            setForm({ ...form, expectations: e.target.value })
          }
        />

        {/* SKILLS */}
        <textarea
          placeholder="Skills (one per line)"
          value={form.skills}
          onChange={(e) =>
            setForm({ ...form, skills: e.target.value })
          }
        />

        <button className={styles.primary}>
          {form.id ? "Update Job" : "Add Job"}
        </button>
      </form>

      {/* JOB LIST */}
      <div className={styles.grid}>
        {jobs.map((job) => (
          <div key={job.id} className={styles.card}>

            <h3>{job.title}</h3>

            <div className={styles.meta}>
              <span>{job.type}</span>
              <span>{job.location}</span>
            </div>

            <div className={styles.actions}>
              <button
                className={styles.edit}
                onClick={() => editJob(job)}
              >
                Edit
              </button>

              <button
                className={styles.delete}
                onClick={() => deleteJob(job.id)}
              >
                Delete
              </button>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}