import { Sidebar } from "@/widgets/sidebar";
import { ReactNode } from "react";
import styles from "./layout.module.scss";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className={styles.layoutContainer}>
      <Sidebar />
      <main className={styles.main}>{children}</main>
    </div>
  );
}
