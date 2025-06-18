
import styles from '../css/PasswordInput.module.css';
import React, { useState } from 'react';

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
    <div className="password-input-container">
      {label && (
        <label htmlFor={name} className="input-label">
          {label}
          {required && <span className="required-asterisk">*</span>}
        </label>
      )}
      <div className="password-input-wrapper">
        <input
          id={name}
          name={name}
          type={showPassword ? "text" : "password"}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`password-input ${error ? 'input-error' : ''} ${disabled ? 'input-disabled' : ''}`}
          disabled={disabled}
          required={required}
        />
        {showToggle && (
          <button
            type="button"
            className="password-toggle-btn"
            onClick={togglePasswordVisibility}
            disabled={disabled}
          >
            {showPassword ? '👁️' : '👁️‍🗨️'}
          </button>
        )}
      </div>
      {error && <span className="error-message">{error}</span>}
    </div>
  );
};
