import "./App.css";
import SelectInput from "./components/ui/SelectInput";

function App() {

  
  return (
    <>
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


