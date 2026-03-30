"use client";
import styles from "./ChatWidget.module.scss";
import { useRouter } from "next/navigation";
import { FaSearch } from "react-icons/fa";

export default function ChatWidget() {
  const router = useRouter();

  return (
    <div className={styles.widget}>
      <button
        className={styles.button}
        onClick={() => router.push("/tools/audit")}
      >
        <FaSearch />
        <span>Free Audit</span>
      </button>
    </div>
  );
}