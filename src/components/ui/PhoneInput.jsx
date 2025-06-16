import React, { useState } from 'react';
import styles from '../../ComponentStyles/PhoneInput.module.css';

export default function PhoneInput({
  label = 'Mobile Number',
  name = 'mobile',
  placeholder = 'Enter your mobile number',
  required = false,
}) {
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');

  const formatPhoneNumber = (value) => {
    const onlyNums = value.replace(/\D/g, '').slice(0, 10);
    if (onlyNums.length <= 3) return onlyNums;
    if (onlyNums.length <= 6) return `${onlyNums.slice(0, 3)}-${onlyNums.slice(3)}`;
    return `${onlyNums.slice(0, 3)}-${onlyNums.slice(3, 6)}-${onlyNums.slice(6)}`;
  };

  const handlePhoneChange = (value) => {
    setPhone(value);
    const onlyNums = value.replace(/\D/g, '');
    if (onlyNums.length !== 10) {
      setError('Mobile number must be exactly 10 digits');
    } else {
      setError('');
    }
  };

  const handleInput = (e) => {
    const raw = e.target.value.replace(/\D/g, '').slice(0, 10);
    const formatted = formatPhoneNumber(raw);
    handlePhoneChange(formatted);
  };

  return (
    <div className={styles.inputWrapper}>
      {label && <label htmlFor={name}>{label}</label>}
      <input
        type="tel"
        id={name}
        name={name}
        value={phone}
        onChange={handleInput}
        placeholder={placeholder}
        required={required}
        className={`${styles.input} ${error ? styles.errorInput : ''}`}
      />
      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
}
