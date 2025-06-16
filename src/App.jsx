import "./App.css";
import EmailInput from "./components/ui/EmailInput";
import PhoneInput from "./components/ui/PhoneInput";
import { useState } from 'react';
function App() {
   const [phone, setPhone] = useState('');
  const [error, setError] = useState('');

  const handleChange = (value) => {
    setPhone(value);
    const digitsOnly = value.replace(/\D/g, '');
    if (digitsOnly.length !== 10) {
      setError('Mobile number must be exactly 10 digits');
    } else {
      setError('');
    }};
  
  return (
    <>
    <EmailInput />
        <PhoneInput
      label="Mobile Number"
      name="mobile"
      value={phone}
      onChange={handleChange}
      placeholder="Enter your mobile number"
      required
      error={error}
    />
    </>
  );
}

export default App;
