import React from "react";
import styles from "../css/SubmitButton.module.css"; // Reusing styles from SubmitButton

export const OAuthButtons = () => {
  return (
    <div className={styles.oauth}>
      <button className={styles.oauthButton}>Sign in with Apple</button>
      <button className={styles.oauthButton}>Sign in with Google</button>
    </div>
  );
};
