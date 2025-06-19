import React from "react";
import styles from "../../Register/css/RegistrationStatus.module.css";
import { StatusCard } from "../../Register/jsx/StatusCard";
import { InfoBox } from "../../Register/jsx/InfoBox";
import { useRegistrationStatus } from "../../Register/helper/useRegistrationStatus";
import { SubmitButton } from "../../util/jsx/SubmitButton";

export const RegistrationStatus = () => {
  const { status, userEmail, loading } = useRegistrationStatus();

  if (loading) {
    return <div className={styles.loading}>Loading...</div>;
  }

  const getStatusConfig = (status) => {
    return {
      pending_verification: {
        icon: "mail",
        title: "Thank you for registering!",
        message: "Please verify your email",
        description: `We've sent a verification link to ${userEmail}. Please check your inbox and click the link to complete your registration.`,
        color: "blue",
        showResend: true,
      },
      under_review: {
        icon: "clock",
        title: "Thank you for registering!",
        message: "Your application is under review",
        description:
          "We'll notify you when your account has been approved. This usually takes 1-2 business days.",
        color: "orange",
        showResend: false,
      },
      approved: {
        icon: "check",
        title: "Welcome aboard!",
        message: "Your account has been approved",
        description:
          "You can now access all features of your account. Welcome to our community!",
        color: "green",
        showResend: false,
      },
      rejected: {
        icon: "cross",
        title: "Application Status",
        message: "Your application was not approved",
        description:
          "Unfortunately, we cannot approve your registration at this time. If you believe this is an error, please contact our support team.",
        color: "red",
        showResend: false,
      },
      error: {
        icon: "⚠",
        title: "Error Fetching Status",
        message: "Unable to retrieve your registration status",
        description:
          "There was an issue connecting to our servers. Please try again later or contact support for assistance.",
        color: "red",
        showResend: false,
      },
    }[status] || {
      icon: "⚠",
      title: "Error Fetching Status",
      message: "Unable to retrieve your registration status",
      description:
        "There was an issue connecting to our servers. Please try again later or contact support for assistance.",
      color: "red",
      showResend: false,
    };
  };

  const handleResendEmail = () => {
    alert("Verification email sent!");
  };

  const config = getStatusConfig(status);

  return (
    <div className={styles.container}>
      <StatusCard
        config={config}
        status={status}
        handleResendEmail={handleResendEmail}
      />
      {status === "pending_verification" && (
        <InfoBox
          icon="alert"
          title="Didn't receive the email?"
          description="Check your spam folder or contact support if you continue having issues."
          color="blue"
        />
      )}
      {status === "under_review" && (
        <InfoBox
          icon="clock"
          title="What happens next?"
          description="Our team will review your application and send you an email once a decision is made."
          color="orange"
        />
      )}
    </div>
  );
};