import ProgressStepper from "./ProgressStepper";
import Logo from './Logo.svg';
import Vector from './Vector.svg';

const Header = ({ activeStep, stage }) => {
  return (
    <div className="header">
      <img src={Logo} alt="Logo" />
      <ProgressStepper activeStep={activeStep} stage={stage} />
      <a href="/"><img src={Vector} alt="Vector" /></a>
    </div>
  );
};

export default Header;
