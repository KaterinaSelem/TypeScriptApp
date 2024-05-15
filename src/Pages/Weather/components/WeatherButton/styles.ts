import styled from "@emotion/styled";

interface ButtonComponentProps {
  disabled: boolean;
}

export const ButtonStyled = styled.button<ButtonComponentProps>`
width: 146px;
height: 48px;
padding: 12px 40px 12px 40px;
border: none;
border-radius: 16px;
background: ${({disabled}) =>disabled? "gray": "#3678B4"};
color: white;
font-size: 16px;
cursor: pointer;
`;
