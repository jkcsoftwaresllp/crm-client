import React, { useEffect, useRef, useState } from "react";
import styles from "../css/OtpInput.module.css";
import { SubmitButton } from "./SubmitButton";
import { ErrorBanner } from "./ErrorBanner";

export const OtpInput = ({ phoneNumber, onVerify, errorMessage }) => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [timer, setTimer] = useState(30);
  const [error, setError] = useState("");
  const inputs = useRef([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleChange = (index, value) => {
    if (/^\d$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      if (index < 5) inputs.current[index + 1].focus();
    } else if (value === "") {
      const newOtp = [...otp];
      newOtp[index] = "";
      setOtp(newOtp);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const fullOtp = otp.join("");
    if (fullOtp.length < 6) return setError("Enter complete 6 digit code.");
    setError("");
    onVerify(fullOtp);
  };

  const handleResend = () => {
    if (timer === 0) {
      setTimer(30);
      // Simulate resend OTP logic (optional)
    }
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <h2 className={styles.title}>Verify Phone Number</h2>
      <p className={styles.subtitle}>
        We have sent a 6 digit verification code to <strong>{phoneNumber}</strong>
      </p>
      {(error || errorMessage) && <ErrorBanner message={error || errorMessage} />}
      <div className={styles.otpBoxes}>
        {otp.map((digit, idx) => (
          <input
            key={idx}
            ref={(el) => (inputs.current[idx] = el)}
            value={digit}
            onChange={(e) => handleChange(idx, e.target.value)}
            maxLength={1}
            className={styles.otpInput}
            inputMode="numeric"
          />
        ))}
      </div>
      <SubmitButton text="Submit" />
      <p className={styles.resend}>
        Resend code in <strong>00:{timer.toString().padStart(2, "0")}</strong>
        {timer === 0 && (
          <button type="button" className={styles.resendLink} onClick={handleResend}>
            Resend
          </button>
        )}
      </p>
    </form>
  );
};

