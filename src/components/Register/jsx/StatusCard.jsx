import React from 'react';
import styles from '../../Register/css/StatusCard.module.css';

export const StatusCard = ({ config, status, handleResendEmail }) => {
  return (
    <div className={`${styles.card} ${
      config.color === 'blue' ? styles.borderBlue :
      config.color === 'orange' ? styles.borderOrange :
      config.color === 'green' ? styles.borderGreen :
      config.color === 'red' ? styles.borderRed : ''
    }`}>
      <div className={`${styles.iconContainer} ${
        config.color === 'blue' ? styles.iconBlue :
        config.color === 'orange' ? styles.iconOrange :
        config.color === 'green' ? styles.iconGreen :
        config.color === 'red' ? styles.iconRed : ''
      }`}>
        <span className={styles.icon}>{config.icon === 'mail' ? '📧' : config.icon === 'clock' ? '⏰' : config.icon === 'check' ? '✔' : '❌'}</span>
      </div>
      <h1 className={styles.title}>{config.title}</h1>
      <div className={`
        ${config.color === 'blue' ? styles.bgBlue : ''}
        ${config.color === 'orange' ? styles.bgOrange : ''}
        ${config.color === 'green' ? styles.bgGreen : ''}
        ${config.color === 'red' ? styles.bgRed : ''}
        ${styles.statusMessage}
        ${config.color === 'blue' ? styles.textBlue : ''}
        ${config.color === 'orange' ? styles.textOrange : ''}
        ${config.color === 'green' ? styles.textGreen : ''}
        ${config.color === 'red' ? styles.textRed : ''}
      `}>
        {config.message}
      </div>
      <p className={styles.description}>{config.description}</p>
      <div className={styles.actions}>
        {config.showResend && (
          <button
            onClick={handleResendEmail}
            className={`
              ${config.color === 'blue' ? styles.buttonBlue : ''}
              ${config.color === 'orange' ? styles.buttonOrange : ''}
              ${config.color === 'green' ? styles.buttonGreen : ''}
              ${config.color === 'red' ? styles.buttonRed : ''}
              ${styles.actionButton}
            `}
          >
            Resend Verification Email
          </button>
        )}
        {status === 'approved' && (
          <button className={`
            ${config.color === 'green' ? styles.buttonGreen : ''}
            ${styles.actionButton}
          `}>
            Continue to Dashboard
          </button>
        )}
        {status === 'rejected' && (
          <button className={`
            ${config.color === 'red' ? styles.buttonRed : ''}
            ${styles.actionButton}
          `}>
            Contact Support
          </button>
        )}
        <button className={`
         ${styles.backButton}
         ${config.color === 'blue' ? styles.backBlue : ''}
         ${config.color === 'orange' ? styles.backOrange : ''}
         ${config.color === 'green' ? styles.backGreen : ''}
         ${config.color === 'red' ? styles.backRed : ''}
         ${styles.actionButton}
      `}>
        Back to Home
      </button>
      </div>
    </div>
  );
};