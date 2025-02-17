import React from "react";
import { useForm } from "react-hook-form";
import "../App.css";

const AddressInfo = ({ onSuccess, email, phone }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange", defaultValues: { email, phone } });

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    onSuccess();
  };

  return (
    <div className="container">
      <h2 className="title">Contacts</h2>
      <p>These contacts are used to inform about orders</p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="firlast">
          <label className="label">Email</label>
          <input
            type="email"
            {...register("email", { required: "Email is required." })}
            className="input"
            disabled
          />
          <hr className="hr" />
          {errors.email && <p className="error">{errors.email.message}</p>}

          <label className="label">Phone</label>
          <input
            type="text"
            {...register("phone", { required: "Phone number is required." })}
            className="input"
            disabled
          />
          <hr className="hr" />
          {errors.phone && <p className="error">{errors.phone.message}</p>}
        </div>

        <button type="submit" className="button" disabled={!isValid}>
          Go Next →
        </button>
      </form>
    </div>
  );
};

export default AddressInfo;
