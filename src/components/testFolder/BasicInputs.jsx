import EmailInput from "../util/jsx/EmailInput";
import { PasswordInput } from "../util/jsx/PasswordInput";
import { TextInput } from "../util/jsx/TextInput";
import PhoneInput from '../util/jsx/PhoneInput';
import usePhoneInput from '../util/helper/usePhoneInput';
import SelectInput from "../ui/SelectInput";

export const BasicInputs = () => {
   const { phone, error, handleChange } = usePhoneInput();
  return (
    <>
      <EmailInput />
      <PasswordInput />
      <TextInput />
       <PhoneInput
        label="Mobile Number"
        name="mobile"
        value={phone}
        onChange={handleChange}
        error={error}
        required
        placeholder="Enter your 10-digit mobile number"
      />
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
};
