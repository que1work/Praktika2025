import React from "react";
import { useForm, Controller } from "react-hook-form";
import "../App.css";
import rewrite from "./rewrite.svg";

const ConfirmationCodeInput = ({ phoneNumber, onSuccess }) => {
  const { control, handleSubmit, setError } = useForm({
    defaultValues: { code: "" },
  });

  const onSubmit = (data) => {
    if (data.code !== "1966") {
      setError("code", { type: "manual", message: "Incorrect confirmation code" });
      return;
    }
    console.log("Code entered:", data.code);
    onSuccess();
  };

  return (
    <div className="confirmation-container">
      <div className="confirmation-box">
        <div className="phonenumber">
          <div>
            <p><b>{phoneNumber}</b></p>
            <p>Number not confirmed yet</p>
          </div>
          <a href="/"><img src={rewrite} alt="Edit number" /></a>
        </div>

        <label className="confirmation-label">Confirmation code</label>

        <div className="input-wrapper">
          <Controller
            name="code"
            control={control}
            rules={{
              required: "Enter the confirmation code",
              pattern: {
                value: /^[0-9]{4}$/,
                message: "Code must be exactly 4 digits",
              },
            }}
            render={({ field, fieldState }) => (
              <div>
                <input
                  {...field}
                  placeholder="— — — —"
                  className="code-input"
                  maxLength={4}
                />
                <hr />
                {fieldState.error && <p className="error">{fieldState.error.message}</p>}
              </div>
            )}
          />
        </div>

        <p className="confirmation-text">
          Confirm phone number with code from SMS message
        </p>

        <button type="submit" className="confirm" onClick={handleSubmit(onSubmit)}>
          Confirm
        </button>
      </div>
    </div>
  );
};

export default ConfirmationCodeInput;
