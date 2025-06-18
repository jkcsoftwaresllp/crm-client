import React from 'react';
import styles from '../css/ErrorBanner.module.css';

const ErrorBanner = ({ 
  message, 
  type = "error",
  onClose,
  closable = true,
  icon = true 
}) => {
  if (!message) return null;

  const getIcon = () => {
    switch (type) {
      case 'success':
        return '✓';
      case 'warning':
        return '⚠';
      case 'info':
        return 'ℹ';
      case 'error':
      default:
        return '✕';
    }
  };

  return (
    <div className={`${styles.banner} ${styles[type]}`}>
      <div className={styles.content}>
        {icon && (
          <span className={styles.icon}>
            {getIcon()}
          </span>
        )}
        <span className={styles.message}>{message}</span>
      </div>
      {closable && (
        <button 
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Close"
        >
          ✕
        </button>
      )}
    </div>
  );
};

export default ErrorBanner;
