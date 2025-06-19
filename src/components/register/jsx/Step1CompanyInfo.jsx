import React from "react";
import styles from "../css/step1-company-info.module.css";
import { SidebarSteps } from "./SidebarSteps"; 

import { useNavigate } from "react-router-dom";
import { TextInput } from "../../util/jsx/TextInput";

export const Step1CompanyInfo = ({ formData, setFormData }) => {
  const navigate = useNavigate();

  const handleNext = (e) => {
    e.preventDefault();
    navigate("/register/admin-info");
  };

  return (
    <div className={styles.wrapper}>
      <SidebarSteps currentStep={1} />
      <form className={styles.formContainer} onSubmit={handleNext}>
        <h2 className={styles.heading}>Company Information</h2>

        <TextInput
          label="Company Name"
          name="companyName"
          placeholder="Enter your company name"
          value={formData.companyName}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, companyName: e.target.value }))
          }
          required
        />

        <TextInput
          label="Subdomain"
          name="subdomain"
          placeholder="e.g., mycompany"
          value={formData.subdomain}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, subdomain: e.target.value }))
          }
          required
        />

        <div className={styles.buttonGroup}>
          <button type="button" className={styles.backBtn} disabled>
            Back
          </button>
          <button type="submit" className={styles.nextBtn}>
            Next
          </button>
        </div>
      </form>
    </div>
  );
};
