import React from 'react';
import styles from '../css/EmailInput.module.css'

export const EmailInput = ({
  label,
  name,
  value,
  onChange,
  placeholder = "Enter your email address",
  required = false,
  error,
  className = "",
  ...props
}) => {
  const inputId = name || 'email-input';

  return (
    <div className={`${styles.emailInputContainer} ${className}`}>
      {label && (
        <label htmlFor={inputId} className={styles.emailInputLabel}>
          {label}
          {required && <span className={styles.requiredAsterisk}>*</span>}
        </label>
      )}
      
      <div className={styles.emailInputWrapper}>
        <input
          id={inputId}
          type="email"
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className={`${styles.emailInput} ${error ? styles.error : ''}`}
          {...props}
        />
      </div>
      
      {error && (
        <div className={styles.emailInputError} role="alert">
          {error}
        </div>
      )}
    </div>
  );
};

export default EmailInput;
