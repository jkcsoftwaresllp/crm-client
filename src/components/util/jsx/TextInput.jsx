import styles from "../css/TextInput.module.css";

export const TextInput = ({
  label,
  name,
  value,
  onChange,
  placeholder = "Start Typing...",
  required = false,
  error = "",
  type = "text",
}) => {
  return (
    <div className={styles.inputGroup}>
      {label && (
        <label htmlFor={name} className={styles.label}>
          {label} {required && <span className={styles.required}>*</span>}
        </label>
      )}
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className={`${styles.input} ${error ? styles.inputError : ""}`}
        autoComplete="off"
      />
      {error && <p className={styles.errorText}>{error}</p>}
    </div>
  );
};
