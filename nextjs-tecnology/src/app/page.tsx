"use client";

import styles from "./page.module.css";
import { Dashboard } from "./pages/Dashboard/dashboard";

export default function Home() {
  return (
    <div className={styles.page}>
      <Dashboard />
    </div>
  );
}
