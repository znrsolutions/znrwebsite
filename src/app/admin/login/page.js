"use client";

import { useState } from "react";
import styles from "./login.module.scss";

export default function Login() {
  const [form, setForm] = useState({ username: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    setLoading(true);

    const res = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    let data;

    try {
      data = await res.json();
    } catch {
      alert("Server error");
      setLoading(false);
      return;
    }

    if (data.error) {
      alert(data.error);
      setLoading(false);
      return;
    }

    window.location.href = "/admin/blogs";
  };

  return (
    <div className={styles.login}>
      <div className={styles.card}>
        <h1>Admin Login</h1>
        <p>Access your dashboard</p>

        <form onSubmit={handleLogin} className={styles.form}>
          <input
            type="text"
            placeholder="Username"
            onChange={(e) =>
              setForm({ ...form, username: e.target.value })
            }
          />

          <input
            type="password"
            placeholder="Password"
            onChange={(e) =>
              setForm({ ...form, password: e.target.value })
            }
          />

          <button type="submit">
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <div className={styles.footer}>
          ZNR Admin Panel
        </div>
      </div>
    </div>
  );
}