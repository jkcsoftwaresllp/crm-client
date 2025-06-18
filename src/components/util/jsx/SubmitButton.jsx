import React from 'react';
import styles from '../css/SubmitButton.module.css';

const SubmitButton = ({ 
  children, 
  onClick, 
  type = "button",
  variant = "primary",
  size = "medium",
  disabled = false,
  loading = false,
  fullWidth = false 
}) => {
  const buttonClasses = [
    styles.button,
    styles[variant],
    styles[size],
    fullWidth ? styles.fullWidth : '',
    disabled || loading ? styles.disabled : ''
  ].filter(Boolean).join(' ');

  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled || loading}
    >
      {loading && <span className={styles.spinner}></span>}
      <span className={styles.buttonText}>{children}</span>
    </button>
  );
};

export default SubmitButton;
