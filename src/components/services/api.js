//Simulate API call to send OTP
export const sendOtp = async (mobile) => {
  console.log("API: Sending OTP to", mobile);
  return new Promise((resolve) => setTimeout(() => resolve({ success: true }), 500));
};

//Simulate API call to verify OTP
export const verifyOtp = async (otp) => {
  console.log("API: Verifying OTP:", otp);
  return new Promise((resolve) => setTimeout(() => resolve({ success: true }), 500));
};

// Simulate API call to submit KYC
export const submitKyc = async (formData) => {
  console.log("API: Submitting KYC:", formData);

  // If needed, convert file to FormData (for backend file uploads)
  const payload = new FormData();
  payload.append("fullName", formData.fullName);
  payload.append("panNumber", formData.panNumber);
  payload.append("aadharNumber", formData.aadharNumber);
  payload.append("address", formData.address);
  payload.append("file", formData.file);

  // Simulate API call
  return new Promise((resolve) => setTimeout(() => resolve({ success: true }), 500));
};
