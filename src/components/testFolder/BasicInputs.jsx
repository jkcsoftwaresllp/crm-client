

import { useState } from "react";
import EmailInput from "../util/jsx/EmailInput";
import { PasswordInput } from "../util/jsx/PasswordInput";
import { TextInput } from "../util/jsx/TextInput";
import PhoneInput from '../util/jsx/PhoneInput';
import usePhoneInput from '../util/helper/usePhoneInput';
import SelectInput from "../ui/SelectInput";
import FileInput from "../util/jsx/FileInput";



export const BasicInputs = () => {
   const { phone, error, handleChange } = usePhoneInput();
   const [selectedFile, setSelectedFile] = useState(null);
  const [fileError, setFileError] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
   const allowedTypes = ["image/png", "image/jpeg"];

    if (!file) {
      setFileError("File is required.");
      setSelectedFile(null);
    } else if (!allowedTypes.includes(file.type)) {
      setFileError("Only PNG and JPEG files are allowed.");
      setSelectedFile(null);
    } else {
      setFileError("");
      setSelectedFile(file);
    }
  };
  
  return (
    <>
       <EmailInput />
      <PasswordInput />
      <TextInput />  
       <ErrorBanner />
      <SubmitButton />
      <SelectDropdown /> 
       <FileUpload />
    </>
  );
};
