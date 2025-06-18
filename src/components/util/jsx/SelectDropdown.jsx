
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
    <div className="select-dropdown-container">
      {label && (
        <label htmlFor={name} className="input-label">
          {label}
          {required && <span className="required-asterisk">*</span>}
        </label>
      )}
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className={`select-dropdown ${error ? 'input-error' : ''} ${disabled ? 'input-disabled' : ''}`}
        disabled={disabled}
        required={required}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <span className="error-message">{error}</span>}
    </div>
  );
};


