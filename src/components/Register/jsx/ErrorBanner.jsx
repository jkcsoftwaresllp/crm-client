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
    <div className={`${styles.errorBanner} ${styles[type]}`}>
      <div className={styles.bannerContent}>
        {icon && <span className={styles.bannerIcon}>{getIcon()}</span>}
        <span className={styles.bannerMessage}>{message}</span>
      </div>
      {dismissible && onClose && (
        <button 
          className={styles.bannerCloseBtn} 
          onClick={onClose}
          type="button"
        >
          ✕
        </button>
      )}
    </div>
  );
};
