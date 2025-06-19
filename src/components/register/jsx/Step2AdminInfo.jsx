import React from "react";
import styles from "../css/step2-admin-info.module.css";
import { SidebarSteps } from "./SidebarSteps"; 
import { useNavigate } from "react-router-dom";
import { EmailInput } from "../../util/jsx/EmailInput";
import { PasswordInput } from "../../util/jsx/PasswordInput";
import { TextInput } from "../../util/jsx/TextInput";
import { SubmitButton } from "../../util/jsx/SubmitButton";


export const Step2AdminInfo = ({ formData, setFormData }) => {
  const navigate = useNavigate();

  const handleNext = (e) => {
    e.preventDefault();
    navigate("/register/preferences");
  };

  const handleBack = () => {
    navigate("/register/company-info");
  };

  return (
    <div className={styles.wrapper}>
      <SidebarSteps currentStep={2} />
      <form className={styles.formContainer} onSubmit={handleNext}>
        <h2 className={styles.heading}>Admin Information</h2>

        <EmailInput
          label="Admin Email"
          name="adminEmail"
          placeholder="Enter admin email"
          value={formData.adminEmail}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, adminEmail: e.target.value }))
          }
          required
        />

        <PasswordInput
          label="Password"
          name="adminPassword"
          placeholder="Enter password"
          value={formData.adminPassword}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, adminPassword: e.target.value }))
          }
          required
        />

        <TextInput
          label="Job Title"
          name="jobTitle"
          placeholder="e.g., CEO, Manager"
          value={formData.jobTitle}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, jobTitle: e.target.value }))
          }
          required
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
