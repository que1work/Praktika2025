import React, { useState } from "react";
import PhoneNumberInput from "../components/PhoneNumberInput";
import ConfirmationCodeInput from "../components/ConfirmationCodeInput";
import SetPassword from "../components/SetPassword";
import PersonalInfo from "../components/PersonalInfo";
import AddressInfo from "../components/AddressInfo";
import FinalStep from "../components/FinalStep";
import Header from "../components/Header";
import "../App.css";

const Registration = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [stage, setStage] = useState(0);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

  const handleNextStep = () => {
    if (activeStep === 2 && stage === 0) {
      setStage(1);
      setActiveStep(0);
    } else if (activeStep === 2 && stage === 1) {
      setTimeout(() => {
        setStage(0);
        setActiveStep(0);
      }, 2000);
    } else {
      setActiveStep((prev) => prev + 1);
    }
  };

  return (
    <div className="main">
      <Header activeStep={activeStep} stage={stage} />
      <div className="forma">
        {stage === 0 ? (
          <>
            <h1>Registration</h1>
            <p className="pad">
              Fill in the registration data. It will take a couple of minutes.
              All you need is a phone number and e-mail
            </p>
          </>
        ) : (
          <>
            <h1>Profile info</h1>
            <p className="pad">
            Fill in the data for profile. It will take a couple of minutes. 
            You only need a passport
            </p>
          </>
        )}
        {stage === 0 && (
          <>
            {activeStep === 0 && <PhoneNumberInput onSuccess={(num) => { setPhoneNumber(num); handleNextStep(); }} />}
            {activeStep === 1 && <ConfirmationCodeInput phoneNumber={phoneNumber} onSuccess={handleNextStep} />}
            {activeStep === 2 && <SetPassword phoneNumber={phoneNumber} onSuccess={handleNextStep} setEmail={setEmail} />}

          </>
        )}
        {stage === 1 && (
          <>
            {activeStep === 0 && <PersonalInfo onSuccess={handleNextStep} />}
            {activeStep === 1 && <AddressInfo onSuccess={handleNextStep} email={email} phone={phoneNumber} />}
            {activeStep === 2 && <FinalStep onSuccess={handleNextStep} />}
          </>
        )}
      </div>
    </div>
  );
};

export default Registration;
