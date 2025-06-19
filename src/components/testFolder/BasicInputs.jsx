import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import axios from "axios"; // Don't forget this!

import "../../index.css";
import { EmailInput } from "../util/jsx/EmailInput";
import { PasswordInput } from "../util/jsx/PasswordInput";
import { TextInput } from "../util/jsx/TextInput";
import { ErrorBanner } from "../util/jsx/ErrorBanner";
import { FileUpload } from "../util/jsx/FileUpload";
import { SubmitButton } from "../util/jsx/SubmitButton";
import { SelectDropdown } from "../util/jsx/SelectDropdown";

// import { SidebarSteps } from "./SidebarSteps";

import { Step1CompanyInfo } from "../register/jsx/Step1CompanyInfo";
import { Step2AdminInfo } from "../register/jsx/Step2AdminInfo";
import { Step3Preferences } from "../register/jsx/Step3Preferences";
import { Step4ReviewSubmit } from "../register/jsx/Step4ReviewSubmit";



//import PhoneInput from '../util/jsx/PhoneInput';
//import  usePhoneInput from '../util/helper/usePhoneInput';
//import { SelectInput }from "../ui/SelectInput";
//import { FileInput } from "../util/jsx/FileInput";

// export const BasicInputs = () => {
//  const { phone, error, handleChange } = usePhoneInput();
//  const [selectedFile, setSelectedFile] = useState(null);
// const [fileError, setFileError] = useState("");

// const handleFileChange = (e) => {
//   const file = e.target.files[0];
//  const allowedTypes = ["image/png", "image/jpeg"];

//   if (!file) {
//     setFileError("File is required.");
//     setSelectedFile(null);
//   } else if (!allowedTypes.includes(file.type)) {
//     setFileError("Only PNG and JPEG files are allowed.");
//     setSelectedFile(null);
//   } else {
//     setFileError("");
//     setSelectedFile(file);
//   }
// };

// return (






const TestInputs = () => (
  <div style={{ padding: "2rem", background: "#f9f9f9" }}>
    <EmailInput />
    <PasswordInput />
    <TextInput />
    <ErrorBanner />
    <SubmitButton />
    <SelectDropdown />
    <FileUpload />
  </div>
);

export const BasicInputs = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    subdomain: "",
    adminEmail: "",
    adminPassword: "",
    jobTitle: "",
    timezone: "",
    logo: null,
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const submitData = new FormData();
      submitData.append("companyName", formData.companyName);
      submitData.append("subdomain", formData.subdomain);
      submitData.append("email", formData.adminEmail);
      submitData.append("password", formData.adminPassword);
      submitData.append("jobTitle", formData.jobTitle);
      submitData.append("timezone", formData.timezone);
      if (formData.logo) {
        submitData.append("logo", formData.logo);
      }

      // 🔄 Call your backend API here
      await axios.post("https://your-backend.com/api/register", submitData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      alert("Company registered successfully!");
      // You can navigate or show success component here
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/register/company-info"
          element={<Step1CompanyInfo formData={formData} setFormData={setFormData} />}
        />
        <Route
          path="/register/admin-info"
          element={<Step2AdminInfo formData={formData} setFormData={setFormData} />}
        />
        <Route
          path="/register/preferences"
          element={<Step3Preferences formData={formData} setFormData={setFormData} />}
        />
        <Route
          path="/register/review-submit"
          element={
            <Step4ReviewSubmit
              formData={formData}
              setFormData={setFormData}
              handleSubmit={handleSubmit}
              loading={loading}
            />
          }
        />
        <Route path="/test" element={<TestInputs />} />
      </Routes>
    </Router>
  );
};
