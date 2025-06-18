
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
      className={`submit-button ${variant} ${size} ${fullWidth ? 'full-width' : ''} ${loading ? 'loading' : ''} ${disabled ? 'disabled' : ''}`}
    >
      {loading ? (
        <span className="button-content">
          <span className="loading-spinner"></span>
          Loading...
        </span>
      ) : (
        children
      )}
    </button>
  );
};

