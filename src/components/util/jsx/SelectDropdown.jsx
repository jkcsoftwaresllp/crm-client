import React, { useState } from 'react';
import styles from '../css/SelectDropdown.module.css';

const SelectDropdown = ({ 
  label, 
  options = [], 
  value, 
  onChange, 
  placeholder = "Select an option",
  error,
  required = false 
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option) => {
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div className={styles.selectContainer}>
      {label && (
        <label className={styles.label}>
          {label}
          {required && <span className={styles.required}>*</span>}
        </label>
      )}
      <div className={`${styles.selectWrapper} ${error ? styles.error : ''}`}>
        <div 
          className={styles.selectButton}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className={value ? styles.selectedValue : styles.placeholder}>
            {value || placeholder}
          </span>
          <span className={`${styles.arrow} ${isOpen ? styles.open : ''}`}>▼</span>
        </div>
        {isOpen && (
          <div className={styles.dropdown}>
            {options.map((option, index) => (
              <div
                key={index}
                className={styles.option}
                onClick={() => handleSelect(option)}
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
      {error && <span className={styles.errorText}>{error}</span>}
    </div>
  );
};

export default SelectDropdown;

