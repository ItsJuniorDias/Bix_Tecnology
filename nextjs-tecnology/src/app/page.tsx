"use client";

import styles from "./page.module.css";
import { Dashboard } from "./pages/Dashboard/Dashboard";

export default function Home() {
  return (
    <div className={styles.page}>
      <Dashboard />
    </div>
  );
}
