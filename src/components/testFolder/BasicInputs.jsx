import EmailInput from "../util/jsx/EmailInput";
import { PasswordInput } from "../util/jsx/PasswordInput";
import { TextInput } from "../util/jsx/TextInput";
import FileInput from "../util/jsx/FileInput";
import { useState } from "react";

export const BasicInputs = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setError(!selectedFile ? "Please upload a file." : "");
  };
  return (
    <>
      <EmailInput />
      <PasswordInput />
      <TextInput />
      <FileInput
        label="Upload Logo"
        name="logo"
        onChange={handleFileChange}
        accept="image/png, image/jpeg"
        required
        error={error}
      />
    </>
  );
};
