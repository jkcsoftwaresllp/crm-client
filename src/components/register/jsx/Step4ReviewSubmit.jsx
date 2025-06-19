import React, { useState } from "react";
import styles from "../css/step4-review-submit.module.css";
import { SidebarSteps } from "./SidebarSteps"; 
import { useNavigate } from "react-router-dom";

export const Step4ReviewSubmit = ({ formData }) => {
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/register/preferences");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    console.log("Submitting to backend →", formData);
  };

  return (
    <div className={styles.wrapper}>
      <SidebarSteps currentStep={4} />
      <form className={styles.formContainer} onSubmit={handleSubmit}>
        <h2 className={styles.heading}>Review & Submit</h2>

        <div className={styles.reviewSection}>
          <p><strong>Company Name:</strong> {formData.companyName}</p>
          <p><strong>Subdomain:</strong> {formData.subdomain}</p>
          <p><strong>Admin Email:</strong> {formData.adminEmail}</p>
          <p><strong>Job Title:</strong> {formData.jobTitle}</p>
          <div className={styles.passwordLine}>
            <strong>Password:</strong>
            <span>{formData.adminPassword ? "********" : "Not provided"}</span>
          </div>
          <p><strong>Timezone:</strong> {formData.timezone}</p>

          {formData.logoFile && (
            <div className={styles.logoPreview}>
              <strong>Logo Preview:</strong>
              <img
                src={URL.createObjectURL(formData.logoFile)}
                alt="Company Logo"
                className={styles.logoImage}
              />
            </div>
          )}
        </div>

        <div className={styles.buttonGroup}>
          <button type="button" className={styles.backBtn} onClick={handleBack}>
            Back
          </button>
          <button type="submit" className={styles.manualSubmitBtn}>
            Submit
          </button>
        </div>

        {submitted && (
          <div className={styles.successBanner}>
            ✅ Company Registered Successfully!
          </div>
        )}
      </form>
    </div>
  );
};
