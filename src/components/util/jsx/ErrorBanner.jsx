
import styles from '../css/ErrorBanner.module.css';


export const ErrorBanner = ({ 
  message, 
  type = "error", 
  onClose, 
  dismissible = true,
  icon = true 
}) => {
  if (!message) return null;

  const getIcon = () => {
    switch (type) {
      case 'error':
        return '❌';
      case 'warning':
        return '⚠️';
      case 'success':
        return '✅';
      case 'info':
        return 'ℹ️';
      default:
        return '❌';
    }
  };

  return (
    <div className={`error-banner ${type}`}>
      <div className="banner-content">
        {icon && <span className="banner-icon">{getIcon()}</span>}
        <span className="banner-message">{message}</span>
      </div>
      {dismissible && onClose && (
        <button 
          className="banner-close-btn" 
          onClick={onClose}
          type="button"
        >
          ✕
        </button>
      )}
    </div>
  );
};

