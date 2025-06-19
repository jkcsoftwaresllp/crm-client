import React, { useState } from "react";
import { MobileInput } from "./MobileInput";
import { OtpInput } from "./OtpInput";
import { KycUploader } from "./KycUploader";
import styles from "../css/RegistrationForm.module.css";
import { sendOtp, verifyOtp, submitKyc } from "../../services/api";

export const RegistrationForm = () => {
  const [step, setStep] = useState(1);
  const [phone, setPhone] = useState("");
  const [otpError, setOtpError] = useState("");

  const handlePhoneSubmit = async (data) => {
    try {
      await sendOtp(data.mobile);
      setPhone(data.mobile);
      setStep(2);
    } catch (err) {
      alert("Failed to send OTP");
    }
  };

  const handleOtpVerify = async (otp) => {
    try {
      await verifyOtp({ otp });
      setOtpError("");
      setStep(3);
    } catch (err) {
      const message = err?.response?.data?.message || "Invalid or expired OTP.";
      setOtpError(message);
    }
  };

  const handleKycSubmit = async (formData) => {
    try {
      await submitKyc(formData);
      setStep(4);
    } catch (err) {
      alert("KYC submission failed.");
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        {step === 1 && <MobileInput onNext={handlePhoneSubmit} />}
        {step === 2 && (
          <OtpInput
            phoneNumber={phone}
            onVerify={handleOtpVerify}
            errorMessage={otpError}
          />
        )}
        {step === 3 && <KycUploader onSubmit={handleKycSubmit} />}
        {step === 4 && (
          <div className={styles.success}>
            <h2>🎉 Registration Complete!</h2>
            <p>Thank you for completing your KYC.</p>
          </div>
        )}
      </div>
    </div>
  );
};
