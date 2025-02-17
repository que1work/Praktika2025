import { Stepper, Step, StepLabel } from "@mui/material";

const steps = [
  ["Phone Number", "Confirmation", "Set Password"], 
  ["Personal Info", "Address Info", "Final Step"]
];

export default function ProgressStepper({ activeStep, stage }) {
  const currentSteps = steps.length > stage ? steps[stage] : [];

  return (
    <div className="stepper">
      <Stepper activeStep={activeStep} alternativeLabel>
        {currentSteps.map((label, index) => (
          <Step key={index}>
            <StepLabel></StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
}
