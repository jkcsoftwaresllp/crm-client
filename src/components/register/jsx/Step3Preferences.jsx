import React from "react";
import styles from "../css/step3-preferences.module.css";
import { SidebarSteps } from "./SidebarSteps"; 
import { useNavigate } from "react-router-dom";
import { SelectDropdown } from "../../util/jsx/SelectDropdown";
import { FileUpload } from "../../util/jsx/FileUpload";
import { SubmitButton } from "../../util/jsx/SubmitButton";


export const Step3Preferences = ({ formData, setFormData }) => {
  const navigate = useNavigate();

  const timezoneOptions = [
    { label: "UTC", value: "UTC" },
    { label: "IST (India)", value: "IST" },
    { label: "PST (US Pacific)", value: "PST" },
    { label: "EST (US Eastern)", value: "EST" },
    { label: "CET (Central Europe)", value: "CET" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({ ...prev, logoFile: file }));
    }
  };

  const handleNext = (e) => {
    e.preventDefault();
    navigate("/register/review-submit");
  };

  const handleBack = () => {
    navigate("/register/admin-info");
  };

  return (
    <div className={styles.wrapper}>
      <SidebarSteps currentStep={3} />
      <form className={styles.formContainer} onSubmit={handleNext}>
        <h2 className={styles.heading}>Preferences</h2>

        <SelectDropdown
          label="Timezone"
          name="timezone"
          value={formData.timezone || ""}
          onChange={handleChange}
          options={timezoneOptions}
          required
        />

        <FileUpload
          label="Upload Company Logo"
          name="logoFile"
          onChange={handleFileUpload}
          accept="image/png, image/jpeg"
        />

        <div className={styles.buttonGroup}>
          <SubmitButton
            type="button"
            variant="secondary"
            size="small"
            onClick={handleBack}
          >
            Back
          </SubmitButton>
          <SubmitButton 
            type="submit" 
            size="small">
            Next
          </SubmitButton>
        </div>
      </form>
    </div>
  );
};
