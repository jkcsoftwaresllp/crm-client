import styles from "../css/sidebar-steps.module.css";
import { useLocation } from "react-router-dom";

const steps = [
  { number: 1, label: "Company Info", path: "/register/company-info" },
  { number: 2, label: "Admin Info", path: "/register/admin-info" },
  { number: 3, label: "Preferences", path: "/register/preferences" },
  { number: 4, label: "Review & Submit", path: "/register/review-submit" },
];

export const SidebarSteps = () => {
  const location = useLocation();

  return (
    <div className={styles.sidebarWrapper}>
      <h2 className={styles.title}>Get Started</h2>
      <ul className={styles.stepList}>
        {steps.map((step, index) => {
          const isActive = location.pathname === step.path;
          return (
            <li
              key={step.number}
              className={`${styles.stepItem} ${isActive ? styles.active : ""}`}
            >
              <div className={styles.stepIndicator}>
                <span className={styles.stepCircle}>{step.number}</span>
                {index !== steps.length - 1 && <span className={styles.stepLine}></span>}
              </div>
              <span className={styles.stepLabel}>{step.label}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
