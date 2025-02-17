import React from "react";
import { useForm } from "react-hook-form";
import "../App.css";
import { countryCodes } from "./validation.js";

const FinalStep = ({ onSuccess }) => {
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm({ mode: "onChange" });

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    onSuccess();
  };

  return (
    <div className="container">
      <h2 className="title">Delivery address</h2>
      <p>Used for shipping orders</p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <label className="label">Address</label>
        <input
          type="text"
          {...register("address", { required: true, minLength: 5 })}
          className="input"
        />
        <hr className="hr" />

        <label className="label">City</label>
        <input
          type="text"
          {...register("city", { required: true, minLength: 2 })}
          className="input"
        />
        <hr className="hr" />

        <div className="datebirth">
        <label className="label">Country
        <select {...register("country", { required: true })} className="input">
          {Object.keys(countryCodes).map((key) => (
            <option key={key} value={key}>{key}</option>
          ))}
        </select>
        <hr className="hr" />
        </label>

        <label className="label">Zip code
        <input
          type="text"
          {...register("zipCode", { required: true, pattern: /^\d{4,10}$/ })}
          className="input"
        />
        <hr className="hr" />
        </label>
        </div>
        <label className="label">Optional</label>
        <input type="text" {...register("optional")} className="input" />
        <hr className="hr" />

        <button type="submit" className="button" disabled={!isValid}>
        ✔ Save
        </button>
      </form>
    </div>
  );
};

export default FinalStep;
