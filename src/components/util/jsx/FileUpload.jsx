
import styles from '../css/FileUpload.module.css';
import React, { useRef, useState } from 'react';

export const FileUpload = ({ 
  label = "Upload Logo", 
  accept = "image/*",
  onChange, 
  error, 
  name = "logo",
  required = false,
  disabled = false,
  maxSize = 5 * 1024 * 1024, // 5MB default
  preview = true 
}) => {
  const fileInputRef = useRef(null);
  const [dragActive, setDragActive] = useState(false);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleFileSelect = (file) => {
    if (file && file.size > maxSize) {
      onChange({ target: { name, files: null } }, `File size must be less than ${maxSize / (1024 * 1024)}MB`);
      return;
    }

    if (preview && file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => setPreviewUrl(e.target.result);
      reader.readAsDataURL(file);
    }

    onChange({ target: { name, files: file ? [file] : null } });
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
      handleFileSelect(e.dataTransfer.files[0]);
    }
  };

  const handleInputChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      handleFileSelect(e.target.files[0]);
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="file-upload-container">
      {label && (
        <label className="input-label">
          {label}
          {required && <span className="required-asterisk">*</span>}
        </label>
      )}
      <div
        className={`file-upload-area ${dragActive ? 'drag-active' : ''} ${error ? 'input-error' : ''} ${disabled ? 'input-disabled' : ''}`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        onClick={handleClick}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept={accept}
          onChange={handleInputChange}
          className="file-input-hidden"
          disabled={disabled}
          required={required}
        />
        
        {previewUrl ? (
          <div className="file-preview">
            <img src={previewUrl} alt="Preview" className="preview-image" />
            <p className="file-upload-text">Click to change or drag new file</p>
          </div>
        ) : (
          <div className="file-upload-content">
            <div className="upload-icon">📁</div>
            <p className="file-upload-text">
              Click to upload or drag and drop
            </p>
            <p className="file-upload-subtext">
              {accept.includes('image') ? 'PNG, JPG, GIF up to' : 'Files up to'} {maxSize / (1024 * 1024)}MB
            </p>
          </div>
        )}
      </div>
      {error && <span className="error-message">{error}</span>}
    </div>
  );
};

