"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Statements from "./../../../assets/svg/Statement.svg";
import { NAV_ITEMS } from "./../model/constants";
import styles from "./Sidebar.module.scss";

export const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>
        <Statements width={212} height={32} />
      </div>
      <hr className={styles.divider} />
      <nav className={styles.nav} aria-label="Main">
        {NAV_ITEMS.map(({ href, label, icon: Icon }) => {
          const isActive = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={`${styles.navItem} ${isActive ? styles.navItemActive : ""}`}
              aria-current={isActive ? "page" : undefined}
            >
              <Icon className={styles.navIcon} alt="" />
              <span className={styles.navLabel}>{label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};
