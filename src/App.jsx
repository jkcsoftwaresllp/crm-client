import "./App.css";
import EmailInput from "./components/ui/EmailInput";
import FileInput from "./components/ui/FileInput";
import { useState } from "react";

function App() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    console.log("Selected file:", file);
  };

  return (
    <>
      <EmailInput />

      <FileInput
        label="Upload Logo"
        name="logo"
        onChange={handleFileChange}
        accept="image/png, image/jpeg"
        required
        error={!selectedFile ? "This field is required" : ""}
      />
    </>
  );
}

export default App;
