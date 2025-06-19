import React, { useState } from "react";
import styles from "../css/FileInput.module.css";

export const FileInput = ({
  label,
  name,
  onChange,
  accept = "image/png, image/jpeg",
  required = false,
  error = "",
}) => {
  const [previewUrl, setPreviewUrl] = useState(null);
  const [fileName, setFileName] = useState("");

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setFileName(file.name);
    if (file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => setPreviewUrl(reader.result);
      reader.readAsDataURL(file);
    } else {
      setPreviewUrl(null);
    }

    onChange && onChange(e);
  };

  return (
    <div className={styles.container}>
      {label && <label className={styles.label}>{label}</label>}
      <input
        type="file"
        name={name}
        accept={accept}
        required={required}
        className={styles.input}
        onChange={handleChange}
      />

      {previewUrl ? (
        <img src={previewUrl} alt="Preview" className={styles.preview} />
      ) : (
        fileName && <p className={styles.fileName}>{fileName}</p>
      )}

      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};


