import styled from "@emotion/styled";

interface ButtonComponentProps {
  disabled: boolean;
}

export const ButtonStyled = styled.button<ButtonComponentProps>`
width: 100%;
  height: 70px;
  outline: none;
  border: none;
  border-radius: 4px;
  padding: 20px;
  /* background-color: #425a7d; */
  background: ${({disabled}) =>disabled? "gray": "#425a7d"};
  color: white;
  font-size: 16px;
  cursor: pointer;
`;


/* .main-button {
  width: 300px;
  padding: 20px 30px;
  font-size: 28px;
  color: aliceblue;
  border: none;
  border-radius: 4px;
}

.primary-button {
  background: rgb(21, 56, 79);
}

.secondary-button {
  background: rgb(21, 79, 44);
} */
