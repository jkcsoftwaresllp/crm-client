import { useState } from 'react';
import styles from "../../ComponentStyles/PasswordInput.module.css";


const PasswordInput = ({

    label,
    name,
    value,
    onChange,
    placeholder,
    required = false,
    error,
}) => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    
    return(
        <div className={styles.container}>
            {label && (
                <label htmlFor={name} className={styles.label}>
                    {label}
                    {required && <span className={styles.required}>*</span>}
                </label>
            )}
            <div className={styles.inputWrapper}>
                <input 
                  type={showPassword ? 'text' : 'password' }
                  id = {name}
                  name = {name}
                  value = {value}
                  onChange = {onChange}
                  placeholder = "Enter your password"
                  required = {required}
                  className = {`${styles.input} ${error ? styles.inputError : ''}`}
                />
                <button
                 type="button"
                 onClick={togglePasswordVisibility}
                 className={styles.toggleButton}
                 aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                    {showPassword ? 'Hide' : 'Show'}
                </button>
            </div>
            {error && <p classname={styles.error}>{error}</p>}
        </div>
    );
};

export default PasswordInput;