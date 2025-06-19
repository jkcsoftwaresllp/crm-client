import styles from '../css/SelectDropdown.module.css';

export const SelectDropdown = ({ 
  label, 
  options = [], 
  value, 
  onChange, 
  error, 
  name,
  placeholder = "Select an option",
  required = false,
  disabled = false 
}) => {
  return (
    <div className={styles.selectDropdownContainer}>
      {label && (
        <label htmlFor={name} className={styles.inputLabel}>
          {label}
          {required && <span className={styles.requiredAsterisk}>*</span>}
        </label>
      )}
      
      <div className={styles.selectWrapper}>
        <select
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          className={`${styles.selectDropdown} ${error ? styles.inputError : ''} ${disabled ? styles.inputDisabled : ''}`}
          disabled={disabled}
          required={required}
        >
          <option value="" disabled className={styles.placeholderOption}>
            {placeholder}
          </option>
          {options.map((option, index) => (
            <option key={index} value={option.value} className={styles.selectOption}>
              {option.label}
            </option>
          ))}
        </select>
        
        <div className={styles.dropdownIcon}>
          <svg 
            className={styles.chevronIcon} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 9l-7 7-7-7" 
            />
          </svg>
        </div>
      </div>
      
      {error && <span className={styles.errorMessage}>{error}</span>}
    </div>
  );
};