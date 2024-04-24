type ButtonType = "button" | "submit" | "reset" | undefined ; // Указываем возможные значения для типа кнопки

export interface ButtonProps {
    name: string;
    type? : ButtonType;
    onButtonClick: () => void; // Функция обработчик клика
  }