import { useRef } from 'react';
import styles from '../css/FileUpload.module.css';

export const FileUpload = ({ 
  label = "Upload File", 
  accept = "*/*",
  onChange, 
  error, 
  name = "file",
  required = false,
  disabled = false,
  multiple = false
}) => {
  const fileInputRef = useRef(null);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleInputChange = (e) => {
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <div className={styles.fileUploadContainer}>
      {label && (
        <label className={styles.inputLabel}>
          {label}
          {required && <span className={styles.requiredAsterisk}>*</span>}
        </label>
      )}
      
      <div 
        className={`${styles.fileUploadButton} ${error ? styles.inputError : ''} ${disabled ? styles.inputDisabled : ''}`}
        onClick={handleClick}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept={accept}
          onChange={handleInputChange}
          className={styles.fileInputHidden}
          disabled={disabled}
          required={required}
          name={name}
          multiple={multiple}
        />
        
        <div className={styles.fileIcon}>
          📁
        </div>
        
        <span className={styles.uploadText}>
          Click to upload file
        </span>
      </div>
      
      {error && <span className={styles.errorMessage}>{error}</span>}
    </div>
  );
};
