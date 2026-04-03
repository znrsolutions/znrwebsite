"use client";

import { useState } from "react";
import styles from "./admin.module.scss";

// IMPORT PAGES
import AdminBlogs from "./blogs/page";
import AdminJobs from "./jobs/page";
import AdminCV from "./cv/page";
import AdminApplications from "./applications/page"; // 🔥 NEW

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("blogs");

  // 🔥 LOGOUT
  const handleLogout = async () => {
    await fetch("/api/logout", { method: "POST" });
    window.location.href = "/admin/login";
  };

  // 🔥 TITLE HANDLER
  const getTitle = () => {
    switch (activeTab) {
      case "blogs":
        return "Manage Blogs";
      case "jobs":
        return "Manage Jobs";
      case "cv":
        return "CV Submissions";
      case "applications":
        return "Job Applications"; // 🔥 NEW
      default:
        return "Dashboard";
    }
  };

  return (
    <div className={styles.admin}>

      {/* SIDEBAR */}
      <div className={styles.sidebar}>
        <h2 className={styles.logo}>ZNR Admin</h2>

        <button
          className={activeTab === "blogs" ? styles.active : ""}
          onClick={() => setActiveTab("blogs")}
        >
          Blogs
        </button>

        <button
          className={activeTab === "jobs" ? styles.active : ""}
          onClick={() => setActiveTab("jobs")}
        >
          Jobs
        </button>

        {/* 🔥 APPLICATIONS TAB */}
        <button
          className={activeTab === "applications" ? styles.active : ""}
          onClick={() => setActiveTab("applications")}
        >
          Applications
        </button>

        {/* 🔥 CV TAB */}
        <button
          className={activeTab === "cv" ? styles.active : ""}
          onClick={() => setActiveTab("cv")}
        >
          CV Submissions
        </button>

        {/* 🔥 LOGOUT */}
        <button className={styles.logout} onClick={handleLogout}>
          Logout
        </button>
      </div>

      {/* MAIN AREA */}
      <div className={styles.main}>

        {/* TOP BAR */}
        {/* <div className={styles.topbar}>
          <h1>{getTitle()}</h1>
        </div> */}

        {/* CONTENT */}
        <div className={styles.content}>
          {activeTab === "blogs" && <AdminBlogs />}
          {activeTab === "jobs" && <AdminJobs />}
          {activeTab === "applications" && <AdminApplications />} {/* 🔥 NEW */}
          {activeTab === "cv" && <AdminCV />}
        </div>

      </div>

    </div>
  );
}