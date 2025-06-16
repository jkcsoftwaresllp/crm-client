import React from 'react';
import styles from '../../ComponentStyles/PhoneInput.module.css';

export default function PhoneInput({
  label = 'Mobile Number',
  name = 'mobile',
  placeholder = 'Enter your mobile number',
  required = false,
  value = '',
  onChange = () => {},
  error = ''
}) {
  const formatPhoneNumber = (val) => {
    const onlyNums = val.replace(/\D/g, '').slice(0, 10);
    if (onlyNums.length <= 3) return onlyNums;
    if (onlyNums.length <= 6) return `${onlyNums.slice(0, 3)}-${onlyNums.slice(3)}`;
    return `${onlyNums.slice(0, 3)}-${onlyNums.slice(3, 6)}-${onlyNums.slice(6)}`;
  };

  const handleInput = (e) => {
    const raw = e.target.value;
    const formatted = formatPhoneNumber(raw);
    onChange(formatted); // Pass back formatted value
  };

  return (
    <div className={styles.inputWrapper}>
      {label && <label htmlFor={name}>{label}</label>}
      <input
        type="tel"
        id={name}
        name={name}
        value={value}
        onChange={handleInput}
        placeholder={placeholder}
        required={required}
        className={`${styles.input} ${error ? styles.errorInput : ''}`}
      />
      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
}
