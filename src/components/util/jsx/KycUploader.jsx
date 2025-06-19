// File: src/components/util/jsx/KycUploader.jsx
import React, { useState } from "react";
import styles from "../css/KycUploader.module.css";
import { FileUpload } from "./FileUpload";
import { TextInput } from "./TextInput";
import { SubmitButton } from "./SubmitButton";
import { ErrorBanner } from "./ErrorBanner";
import { submitKyc } from "../../services/api";

export const KycUploader = ({ onBack, onSubmit }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    panNumber: "",
    aadharNumber: "",
    address: "",
    file: null,
  });
  const [filePreview, setFilePreview] = useState(null);
  const [error, setError] = useState("");

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleFileSelect = (file) => {
    if (file) {
      setFilePreview(URL.createObjectURL(file));
      handleChange("file", file);
    }
  };

  const validateInputs = () => {
    const { fullName, panNumber, aadharNumber, address, file } = formData;
    if (!fullName || !/^[a-zA-Z ]+$/.test(fullName)) {
      return "Please enter a valid full name.";
    }
    if (!/^[A-Z]{5}[0-9]{4}[A-Z]$/.test(panNumber)) {
      return "Invalid PAN format (e.g. ABCDE1234F).";
    }
    if (!/^\d{12}$/.test(aadharNumber)) {
      return "Aadhar must be 12 digits.";
    }
    if (!address) {
      return "Address is required.";
    }
    if (!file) {
      return "Please upload a document.";
    }
    return "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validation = validateInputs();
    if (validation) return setError(validation);
    setError("");

    try {
      await submitKyc(formData);
      onSubmit(formData);
    } catch (err) {
      setError("Something went wrong while submitting KYC.");
    }
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <h2 className={styles.title}>Complete Your KYC</h2>
      {error && <ErrorBanner message={error} />}

      <TextInput
        label="Full Name"
        value={formData.fullName}
        onChange={(e) => handleChange("fullName", e.target.value)}
        required
      />
      <TextInput
        label="PAN Number"
        value={formData.panNumber}
        onChange={(e) => handleChange("panNumber", e.target.value)}
        required
      />
      <TextInput
        label="Aadhar Number"
        value={formData.aadharNumber}
        onChange={(e) => handleChange("aadharNumber", e.target.value)}
        required
      />
      <TextInput
        label="Address"
        value={formData.address}
        onChange={(e) => handleChange("address", e.target.value)}
        required
      />

      <FileUpload
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) handleFileSelect(file);
        }}
        preview
        dragAndDrop
        required
      />

      {filePreview && (
        <img
          src={filePreview}
          alt="Preview"
          className={styles.previewImage}
        />
      )}

      <SubmitButton text="Submit" />
    </form>
  );
};
