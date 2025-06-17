import { useState } from 'react';

export default function usePhoneInput(initialValue = '') {
  const [phone, setPhone] = useState(initialValue);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const value = e.target.value.replace(/\D/g, ''); // Remove non-numeric
    setPhone(value);
    if (value.length < 10) {
      setError('Phone number must be 10 digits');
    } else {
      setError('');
    }
  };

  return { phone, error, handleChange };
}
