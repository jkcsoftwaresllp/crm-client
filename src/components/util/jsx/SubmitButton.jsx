import styles from '../css/SubmitButton.module.css';

export const SubmitButton = ({ 
  children = "Submit", 
  onClick, 
  disabled = false, 
  loading = false,
  type = "submit",
  variant = "primary",
  size = "medium",
  fullWidth = false 
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`${styles.submitButton} ${styles[variant]} ${styles[size]} ${fullWidth ? styles.fullWidth : ''} ${loading ? styles.loading : ''} ${disabled ? styles.disabled : ''}`}
    >
      {loading ? (
        <span className={styles.buttonContent}>
          <span className={styles.loadingSpinner}></span>
          Loading...
        </span>
      ) : (
        children
      )}
    </button>
  );
};
