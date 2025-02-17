import React from "react";
import { useForm } from "react-hook-form";
import "../App.css";

const PersonalInfo = ({ onSuccess }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    onSuccess();
  };

  return (
    <div className="container">
      <h2 className="title">Personal Data</h2>
      <p>Specify exactly as in your passport</p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="firlast">
          <label className="label">First Name</label>
          <input
            type="text"
            {...register("firstName", { required: "First name is required." })}
            className="input"
          />
          <hr className="hr" />
          {errors.firstName && <p className="error">{errors.firstName.message}</p>}

          <label className="label">Last Name</label>
          <input
            type="text"
            {...register("lastName", { required: "Last name is required." })}
            className="input"
          />
          <hr className="hr" />
          {errors.lastName && <p className="error">{errors.lastName.message}</p>}
        </div>

        <div className="datebirth">
          <label className="label">Date of Birth
          <input
            type="date"
            {...register("dob", { required: true })}
            className="input"
          />
          <hr className="hr" />
          </label>

          <label className="label">Place of Birth
          <input
            type="text"
            {...register("placeOfBirth", { required: true })}
            className="input"
          />
          <hr className="hr" />
          </label>
        </div>

        <div className="itin">
          <p>123-45-678</p>
          <p><b>Your ITIN</b></p>
        </div>

        <button type="submit" className="button" disabled={!isValid}>
          Go Next →
        </button>
      </form>
    </div>
  );
};

export default PersonalInfo;
