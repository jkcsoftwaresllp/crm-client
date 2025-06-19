import "../../index.css";
import { useState } from "react";
import { EmailInput } from '../Register/jsx/EmailInput'
import { PasswordInput } from "../Register/jsx/PasswordInput";
import { TextInput } from "../Register/jsx/TextInput";
import { ErrorBanner } from "../Register/jsx/ErrorBanner";
import { FileUpload } from "../Register/jsx/FileUpload";
import { SubmitButton } from "../Register/jsx/SubmitButton";
import { SelectDropdown } from "../Register/jsx/SelectDropdown";
//import PhoneInput from '../util/jsx/PhoneInput';
//import  usePhoneInput from '../util/helper/usePhoneInput';
//import { SelectInput }from "../ui/SelectInput";
//import { FileInput } from "../util/jsx/FileInput";

export const BasicInputs = () => {
  //  const { phone, error, handleChange } = usePhoneInput();
  //  const [selectedFile, setSelectedFile] = useState(null);
  // const [fileError, setFileError] = useState("");

  // const handleFileChange = (e) => {
  //   const file = e.target.files[0];
  //  const allowedTypes = ["image/png", "image/jpeg"];

  //   if (!file) {
  //     setFileError("File is required.");
  //     setSelectedFile(null);
  //   } else if (!allowedTypes.includes(file.type)) {
  //     setFileError("Only PNG and JPEG files are allowed.");
  //     setSelectedFile(null);
  //   } else {
  //     setFileError("");
  //     setSelectedFile(file);
  //   }
  // };
  
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
