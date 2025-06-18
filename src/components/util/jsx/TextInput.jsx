
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
    <div className="text-input-container">
      {label && (
        <label htmlFor={name} className="input-label">
          {label}
          {required && <span className="required-asterisk">*</span>}
        </label>
      )}
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`text-input ${error ? 'input-error' : ''} ${disabled ? 'input-disabled' : ''}`}
        disabled={disabled}
        required={required}
      />
      {error && <span className="error-message">{error}</span>}
    </div>
  );
};
