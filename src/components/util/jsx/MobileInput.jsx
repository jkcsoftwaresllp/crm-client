import { useState } from "react";
import { SubmitButton } from "./SubmitButton";
import { ErrorBanner } from "./ErrorBanner";
import styles from "../css/MobileInput.module.css";
import { sendOtp } from "../../services/api"; 

const countryOptions = [
  { code: "+91", label: "India IN (+91)" },
  { code: "+1", label: "USA US (+1)" },
  { code: "+44", label: "UK UK (+44)" },
];

export const MobileInput = ({ onNext }) => {
  const [countryCode, setCountryCode] = useState("+91");
  const [mobileNumber, setMobileNumber] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!/^\d{10}$/.test(mobileNumber)) {
      return setError("Enter a valid 10-digit mobile number.");
    }
    if (!agreed) {
      return setError("You must agree to CRM's terms.");
    }

    const fullMobile = `${countryCode}${mobileNumber}`;
    try {
      await sendOtp(fullMobile); // API call to simulate/send OTP
      setError("");
      onNext({ mobile: fullMobile });
    } catch (err) {
      setError("Failed to send OTP. Please try again later.");
    }
  };

  return (
    <div className={styles.mobileContainer}>
      <h2 className={styles.title}>Welcome to CRM</h2>
      <p className={styles.subtitle}>Create an account in a few easy steps</p>

      {error && <ErrorBanner message={error} />}

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputRow}>
          <select
            className={styles.select}
            value={countryCode}
            onChange={(e) => setCountryCode(e.target.value)}
          >
            {countryOptions.map((country) => (
              <option key={country.code} value={country.code}>
                {country.label}
              </option>
            ))}
          </select>

          <input
            type="tel"
            placeholder="Enter phone number"
            className={styles.input}
            value={mobileNumber}
            maxLength={10}
            onChange={(e) =>
              setMobileNumber(e.target.value.replace(/\D/g, ""))
            }
          />
        </div>

        <label className={styles.checkboxWrapper}>
          <input
            type="checkbox"
            checked={agreed}
            onChange={() => setAgreed(!agreed)}
          />
          <span>
            I agree to CRM's{" "}
            <a href="#" className={styles.link}>
              User Agreement & Privacy Policy
            </a>
          </span>
        </label>

        <SubmitButton type="submit" text="Submit" />
      </form>
    </div>
  );
};
