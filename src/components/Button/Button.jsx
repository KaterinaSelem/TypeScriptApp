// import "./styles.css";

// function Button({ buttonName = "get data", isPrimaryButton }) {
//   console.log();

//   const buttonClass = `main-button ${isPrimaryButton ? "primary-button" : "secondary-button"}`;

//   return <button className={buttonClass}>{buttonName}</button>;
// }

// export default Button;

import "./styles.css";

interface Button {
  name: string;
  type?: "button" | "submit" | "reset"; // Указываем возможные значения для типа кнопки
  onButtonClick: () => void; // Функция обработчик клика
}

function button ({ name, type = "button", onButtonClick }) {
  return (
    <button className="button-component" type={type} onClick={onButtonClick}>
      {name}
    </button>
  );

}

export default Button;
