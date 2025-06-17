import React from 'react';
import styles from './SelectInput.module.css';

const SelectInput = ({
  label,
  name,
  value,
  onChange,
  options = [],
  required = false,
  error = ''
}) => (
  <div className={styles.selectInputContainer}>
    {label && (
      <label htmlFor={name} className={styles.label}>
        {label} {required && '*'}
      </label>
    )}
    <select
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      className={styles.select}
    >
      <option value="">-- Select --</option>
      {options.map(opt => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
    {error && <div className={styles.error}>{error}</div>}
  </div>
);

export default SelectInput;
