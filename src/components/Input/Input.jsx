import "./styles.css"

interface Input {
  name: string;
  type?: "text" | "password" | "email"; 
  placeholder?: string;
  label: string;
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function input ({ name, type = "text", placeholder, label, onInputChange }) {
    return ( <div className="input-component-container">
    <label className="input-component-label">{label}</label>
    <input
      className="input-component"
      name={name}
      type={type}
      placeholder={placeholder}
      onChange={onInputChange}
    />
  </div>
    );
}

export default Input;