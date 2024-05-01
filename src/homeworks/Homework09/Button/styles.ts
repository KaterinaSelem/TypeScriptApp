import styled from "@emotion/styled";

interface ButtonComponentProps {
    disabled: boolean;
  }
  
  export const ButtonStyled = styled.button<ButtonComponentProps>`
    width: 100px;
    height: 70px;
    outline: none;
    border: none;
    border-radius: 4px;
    padding: 20px;
    background: ${({ disabled }) => (disabled ? "#1f27f5" : "#DE0B94" )};
    color: white;
    font-size: 16px;
    cursor: pointer;
  `;

