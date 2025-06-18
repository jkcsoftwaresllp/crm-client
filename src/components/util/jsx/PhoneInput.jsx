import React from 'react';
import styles from '../css/PhoneInput.module.css';

export default function PhoneInput({
  label = 'Mobile Number',
  name = 'mobile',
  value = '',
  onChange,
  placeholder = 'Enter your mobile number',
  required = false,
  error = ''
}) {
  const handleInputChange = (e) => {
    const onlyNums = e.target.value.replace(/\D/g, '');
    if (onlyNums.length <= 10) {
      onChange({ target: { name, value: onlyNums } });
    }
  };

  return (
    <div className={styles.inputWrapper}>
      {label && <label htmlFor={name}>{label}</label>}
      <input
        type="tel"
        id={name}
        name={name}
        value={value}
        onChange={handleInputChange}
        placeholder={placeholder}
        required={required}
        className={`${styles.input} ${error ? styles.errorInput : ''}`}
        pattern="\d*"
      />
      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
}
