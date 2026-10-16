import { ReactNode } from "react";
import Statement from "./../../assets/svg/Statement.svg";
import styles from "./layout.module.scss";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className={styles.layoutContainer}>
      <div className={styles.illustration}>
        <Statement width={364} height={54} className={styles.logo} />
      </div>
      <div className={styles.rightSide}>{children}</div>
    </div>
  );
}
