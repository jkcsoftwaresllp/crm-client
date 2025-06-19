import styles from '../css/EmailInput.module.css';

export const EmailInput = ({ 
  label = "Email Address", 
  placeholder = "Enter your email", 
  value, 
  onChange, 
  error, 
  name = "email",
  required = true,
  disabled = false 
}) => {
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleChange = (e) => {
    const emailValue = e.target.value;
    onChange(e);
    
    // Optional: Real-time validation
    if (emailValue && !validateEmail(emailValue)) {
      // You can trigger validation here if needed
    }
  };

  return (
    <div className={styles.emailInputContainer}>
      {label && (
        <label htmlFor={name} className={styles.inputLabel}>
          {label}
          {required && <span className={styles.requiredAsterisk}>*</span>}
        </label>
      )}
      <input
        id={name}
        name={name}
        type="email"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className={`${styles.emailInput} ${error ? styles.inputError : ''} ${disabled ? styles.inputDisabled : ''}`}
        disabled={disabled}
        required={required}
      />
      {error && <span className={styles.errorMessage}>{error}</span>}
    </div>
  );
};
