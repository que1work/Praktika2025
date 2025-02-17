import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { countryCodes } from "./validation";
import icon from "./Icon.svg";
import x from "./X.svg";
import "../App.css";

const PhoneNumberInput = ({ onSuccess }) => {
  const { control, handleSubmit, setError, clearErrors, watch } = useForm({
    defaultValues: { country: "US", phoneNumber: "" },
  });

  const [showImportant, setShowImportant] = useState(true);
  const selectedCountry = watch("country", "US");
  const maxLength = countryCodes[selectedCountry].maxLength;
  const [enteredPhoneNumber, setEnteredPhoneNumber] = useState("");

  const onSubmit = (data) => {
    const rule = countryCodes[data.country] || countryCodes.ANY;
    const fullNumber = rule.code + data.phoneNumber.replace(/\D/g, "");

    if (!rule.regex.test(fullNumber)) {
      setError("phoneNumber", { type: "manual", message: rule.message });
    } else {
      clearErrors("phoneNumber");
      setEnteredPhoneNumber(fullNumber); 
      onSuccess(fullNumber); 
    }
  };

  return (
    <div className="firstpage">
      {showImportant && (
        <div className="important">
          <img src={icon} alt="important" />
          <p>We take privacy issues seriously. You can be sure that your personal data is securely protected.</p>
          <img src={x} alt="x" onClick={() => setShowImportant(false)} style={{ cursor: "pointer" }} />
        </div>
      )}
      <form onSubmit={handleSubmit(onSubmit)} className="container">
        <label className="label">Enter your phone number</label>
        <div className="inputContainer">
          <Controller
            name="country"
            control={control}
            render={({ field }) => (
              <select {...field} className="select">
                {Object.entries(countryCodes).map(([key, { code }]) =>
                  key !== "ANY" && <option key={key} value={key}>{code}</option>
                )}
              </select>
            )}
          />
          <Controller
            name="phoneNumber"
            control={control}
            rules={{
              required: "Enter your phone number",
              maxLength: {
                value: maxLength,
                message: `Max ${maxLength} digits`,
              },
            }}
            render={({ field }) => (
              <div style={{ flex: 1 }}>
                <input
                  {...field}
                  placeholder="555 555-1234"
                  className="input"
                  maxLength={maxLength}
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, "");
                    if (value.length <= maxLength) field.onChange(value);
                  }}
                />
              </div>
            )}
          />
        </div>
        <hr className="hr" />
        <Controller
          name="phoneNumber"
          control={control}
          render={({ fieldState }) =>
            fieldState.error && <p className="error">{fieldState.error.message}</p>
          }
        />
        <button type="submit" className="button">Send Code</button>
      </form>
    </div>
  );
};

export default PhoneNumberInput;
