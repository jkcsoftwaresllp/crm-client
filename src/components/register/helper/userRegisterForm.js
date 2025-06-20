import { useState } from 'react';

const useRegisterForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: 'invited@example.com',
    password: '',
    jobTitle: '',
    department: '',
    role: '',
    timezone: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required.';
    if (!formData.email.trim()) newErrors.email = 'Email is required.';
    else if (!validateEmail(formData.email)) newErrors.email = 'Invalid email format.';

    if (!formData.password) newErrors.password = 'Password is required.';
    if (!formData.jobTitle) newErrors.jobTitle = 'Please select a job title.';
    if (!formData.department) newErrors.department = 'Please select a department.';
    if (!formData.role) newErrors.role = 'Please select a role.';
    if (!formData.timezone) newErrors.timezone = 'Please select a timezone.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));

    // Live error cleanup
    if (errors[name]) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    if (validate()) {
      console.log('Form submitted:', formData);
      // Reset if desired
      // setFormData({ ...initial });
    }
  };

  return {
    formData,
    errors,
    submitted,
    handleChange,
    handleSubmit,
  };
};

export default useRegisterForm;
