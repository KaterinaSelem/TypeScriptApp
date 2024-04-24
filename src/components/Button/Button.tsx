// import "./styles.css";

// function Button({ buttonName = "get data", isPrimaryButton }) {
//   console.log();

//   const buttonClass = `main-button ${isPrimaryButton ? "primary-button" : "secondary-button"}`;

//   return <button className={buttonClass}>{buttonName}</button>;
// }

// export default Button;

import './styles.css';
import { ButtonProps } from './types';

function Button({ name, type = 'button', onButtonClick }: ButtonProps) {
  return (
    <button className='button-component' type={type} onClick={onButtonClick}>
      {name}
    </button>
  );
}

export default Button;
