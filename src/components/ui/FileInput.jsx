import React, { useState } from "react";
import styles from "../styling/FileInput.module.css";

const FileInput = ({ label, name, onChange, accept, required, error }) => {
  const [preview, setPreview] = useState(null);
  const [fileName, setFileName] = useState("");

  const handleChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setFileName(file.name);
      setPreview(URL.createObjectURL(file));
    } else {
      setFileName("");
      setPreview(null);
    }

    if (onChange) onChange(e); // Pass file change to parent
  };

  return (
    <div className={styles.container}>
      {label && <label htmlFor={name} className={styles.label}>{label}</label>}

      <input
        type="file"
        name={name}
        id={name}
        accept={accept || "image/png, image/jpeg"}
        required={required}
        onChange={handleChange}
        className={styles.input}
      />

      {fileName && <p className={styles.fileName}>Selected: {fileName}</p>}

      {preview && (
        <div className={styles.previewContainer}>
          <img src={preview} alt="Preview" className={styles.previewImage} />
        </div>
      )}

      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default FileInput;
