import React, { useRef, useState } from 'react';
import styles from '../css/FileUpload.module.css';

const FileUpload = ({ 
  label, 
  accept = "*", 
  onChange, 
  error,
  required = false,
  multiple = false 
}) => {
  const fileInputRef = useRef(null);
  const [dragActive, setDragActive] = useState(false);
  const [files, setFiles] = useState([]);

  const handleFiles = (fileList) => {
    const newFiles = Array.from(fileList);
    setFiles(newFiles);
    onChange(newFiles);
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(e.dataTransfer.files);
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFiles(e.target.files);
    }
  };

  const onButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className={styles.fileUploadContainer}>
      {label && (
        <label className={styles.label}>
          {label}
          {required && <span className={styles.required}>*</span>}
        </label>
      )}
      <div 
        className={`${styles.uploadArea} ${dragActive ? styles.dragActive : ''} ${error ? styles.error : ''}`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        onClick={onButtonClick}
      >
        <input
          ref={fileInputRef}
          type="file"
          className={styles.fileInput}
          multiple={multiple}
          accept={accept}
          onChange={handleChange}
        />
        <div className={styles.uploadContent}>
          <div className={styles.uploadIcon}>📁</div>
          <p className={styles.uploadText}>
            <span className={styles.uploadLink}>Click to upload</span> or drag and drop
          </p>
          <p className={styles.uploadSubtext}>
            {accept !== "*" ? `Accepted formats: ${accept}` : "Any file format"}
          </p>
        </div>
      </div>
      {files.length > 0 && (
        <div className={styles.fileList}>
          {files.map((file, index) => (
            <div key={index} className={styles.fileItem}>
              <span className={styles.fileName}>{file.name}</span>
              <span className={styles.fileSize}>
                {(file.size / 1024).toFixed(1)} KB
              </span>
            </div>
          ))}
        </div>
      )}
      {error && <span className={styles.errorText}>{error}</span>}
    </div>
  );
};

export default FileUpload;
