import styles from '../css/TextInput.module.css';

export const TextInput = ({ 
  label, 
  placeholder, 
  value, 
  onChange, 
  error, 
  name, 
  type = "text",
  required = false,
  disabled = false 
}) => {
  return (
    <div className={styles.textInputContainer}>
      {label && (
        <label htmlFor={name} className={styles.inputLabel}>
          {label}
          {required && <span className={styles.requiredAsterisk}>*</span>}
        </label>
      )}
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`${styles.textInput} ${error ? styles.inputError : ''} ${disabled ? styles.inputDisabled : ''}`}
        disabled={disabled}
        required={required}
      />
      {error && <span className={styles.errorMessage}>{error}</span>}
    </div>
  );
};
