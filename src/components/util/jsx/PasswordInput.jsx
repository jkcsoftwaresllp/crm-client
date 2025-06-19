import styles from '../css/PasswordInput.module.css';
import { useState } from 'react';

export const PasswordInput = ({ 
  label = "Password", 
  placeholder = "Enter your password", 
  value, 
  onChange, 
  error, 
  name = "password",
  required = true,
  disabled = false,
  showToggle = true 
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={styles.passwordInputContainer}>
      {label && (
        <label htmlFor={name} className={styles.inputLabel}>
          {label}
          {required && <span className={styles.requiredAsterisk}>*</span>}
        </label>
      )}
      <div className={styles.passwordInputWrapper}>
        <input
          id={name}
          name={name}
          type={showPassword ? "text" : "password"}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`${styles.passwordInput} ${error ? styles.inputError : ''} ${disabled ? styles.inputDisabled : ''}`}
          disabled={disabled}
          required={required}
        />
        {showToggle && (
          <button
            type="button"
            className={styles.passwordToggleBtn}
            onClick={togglePasswordVisibility}
            disabled={disabled}
          >
            {showPassword ? '👁️' : '👁️‍🗨️'}
          </button>
        )}
      </div>
      {error && <span className={styles.errorMessage}>{error}</span>}
    </div>
  );
};
