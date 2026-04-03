"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ApplyForm({ jobId }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(e.target);

    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (data.success) {
        toast.success("✅ Application submitted successfully!");

        // 🔥 redirect after success
        router.push("/careers");
      } else {
        setError("❌ Submission failed. Try again.");
      }
    } catch (err) {
      setError("❌ Network error. Try again.");
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>

      <input type="hidden" name="job_id" value={jobId} />

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

      {/* ERROR MESSAGE */}
      {error && (
        <p style={{ color: "red", marginTop: "10px" }}>{error}</p>
      )}

      <button type="submit">
        {loading ? "Submitting..." : "Submit Application"}
      </button>
    </form>
  );
}