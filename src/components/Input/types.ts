export interface InputProps {
    name: string;
    type?: "text" | "password" | "email"; 
    placeholder?: string;
    label: string;
    onInputChange?: () => void;
  }