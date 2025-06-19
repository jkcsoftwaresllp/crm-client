import React, { useState } from "react";
import styles from "../css/step4-review-submit.module.css";
import { SidebarSteps } from "./SidebarSteps";
import { useNavigate } from "react-router-dom";
import { SubmitButton } from "../../util/jsx/SubmitButton";
import { ReviewRow } from "../../util/jsx/ReviewRow";


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
          <ReviewRow label="Company Name" value={formData.companyName} />
          <ReviewRow label="Subdomain" value={formData.subdomain} />
          <ReviewRow label="Admin Email" value={formData.adminEmail} />
          <ReviewRow label="Job Title" value={formData.jobTitle} />

          <div className={styles.passwordLine}>
            <strong>Password:</strong>
            <span>{formData.adminPassword ? "********" : "Not provided"}</span>
          </div>

          <ReviewRow label="Timezone" value={formData.timezone} />

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
            size="small"
          >
            Submit
          </SubmitButton>
        </div>

        {submitted && (
          <div className={styles.successBanner}>
            Company Registered Successfully!
          </div>
        )}
      </form>
    </div>
  );
};
