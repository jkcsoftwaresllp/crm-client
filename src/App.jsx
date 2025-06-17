import "./App.css";
import { BasicInputs } from "./components/testFolder/BasicInputs";
import SelectInput from "./components/ui/SelectInput";

function App() {

  
  return (
    <>
    <BasicInputs/>
      <SelectInput
        label="Timezone"
        name="timezone"
        value={""}
        onChange={() => {}}
        options={[
          { label: 'UTC', value: 'UTC' },
          { label: 'IST', value: 'Asia/Kolkata' }
        ]}
      />
    </>
  );
}

export default App;


