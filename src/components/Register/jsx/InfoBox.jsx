import React from 'react';
import styles from '../../Register/css/InfoBox.module.css';

export const InfoBox = ({ icon, title, description, color }) => {
  return (
    <div className={`${styles.container} ${styles[color]}`}>
      <div className={styles.content}>
        <span className={`${styles.icon} ${styles[`icon${color.charAt(0).toUpperCase() + color.slice(1)}`]}`}>
          {icon === 'alert' ? '⚠' : '⏰'}
        </span>
        <div>
          <p className={`${styles.title} ${styles[`text${color.charAt(0).toUpperCase() + color.slice(1)}`]}`}>{title}</p>
          <p className={styles.description}>{description}</p>
        </div>
      </div>
    </div>
  );
};