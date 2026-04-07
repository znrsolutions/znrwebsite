"use client";

import { useEffect, useState } from "react";
import styles from "./IPBadge.module.scss";

export default function IPBadge() {
  const [ip, setIp] = useState("Loading...");

  useEffect(() => {
    fetch("/api/ip")
      .then((res) => res.json())
      .then((data) => setIp(data.ip))
      .catch(() => setIp("Unknown"));
  }, []);

  return (
    <div className={styles.ipBadge}>
      🌐 {ip}
    </div>
  );
}