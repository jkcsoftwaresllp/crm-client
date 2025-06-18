
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
    <div className="email-input-container">
      {label && (
        <label htmlFor={name} className="input-label">
          {label}
          {required && <span className="required-asterisk">*</span>}
        </label>
      )}
      <input
        id={name}
        name={name}
        type="email"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className={`email-input ${error ? 'input-error' : ''} ${disabled ? 'input-disabled' : ''}`}
        disabled={disabled}
        required={required}
      />
      {error && <span className="error-message">{error}</span>}
    </div>
  );
};
