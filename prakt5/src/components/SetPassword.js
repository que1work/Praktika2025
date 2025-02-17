import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";

const SetPassword = ({ phoneNumber, onSuccess, setEmail }) => {
  const { control, handleSubmit, watch } = useForm({
    defaultValues: { email: "", password: "" },
  });

  const [showPassword, setShowPassword] = useState(false);
  const password = watch("password", "");

  const getPasswordStrength = (password) => {
    if (password.length >= 8 && /[A-Z]/.test(password) && /\d/.test(password)) {
      return { text: "✔ Good password", color: "green" };
    } else if (password.length >= 6) {
      return { text: "⚠ Medium password", color: "orange" };
    } else {
      return { text: "✖ Bad password", color: "red" };
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = (data) => {
    setEmail(data.email); 
    onSuccess();
  };

  return (
    <div className="confirmation-box">
      <div className="phonenumber">
        <div>
          <p><b>{phoneNumber}</b></p>
          <p>✔ Number confirmed</p>
        </div>
      </div>
      
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="details">
          <div className="Emaildiv">
            <label>Enter your email</label>
            <br />
            <Controller
              name="email"
              control={control}
              rules={{ required: "Email is required" }}
              render={({ field }) => (
                <input {...field} type="email" placeholder="alex_manager@gmail.com" />
              )}
            />
          </div>
          
          <div className="Passworddiv">
            <label>Set a password</label>
            <br />
            <div className="password-wrapper">
              <Controller
                name="password"
                control={control}
                rules={{ required: "Password is required" }}
                render={({ field }) => (
                  <input {...field} type={showPassword ? "text" : "password"} placeholder="••••••••" className="password-input" />
                )}
              />
              <span className="eye-icon" onClick={togglePasswordVisibility}>
                👁
              </span>
            </div>
          </div>
          
          <p className="password-strength" style={{ color: getPasswordStrength(password).color }}>
            {getPasswordStrength(password).text}
          </p>
          
          <button type="submit" className="register-button">Register Now</button>
        </div>
      </form>
    </div>
  );
};

export default SetPassword;

