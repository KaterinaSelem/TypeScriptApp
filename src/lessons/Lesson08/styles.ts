import { css } from '@emotion/react';
import styled from '@emotion/styled';

interface ButtonPropsStyled {
  mainButton?: boolean;
}

const commonBoxStyles = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 250px;
  height: 250px;
`

export const Lesson08Component = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  gap: 15px;
`;

export const BoxComponent = styled.div`
${commonBoxStyles};
  background: #e88ea0;
`;

export const InfoBoxComponent = styled.div`
${commonBoxStyles};
  background: #71A9F5;
  font-size: 28px;
`;

export const ButtonComponent = styled.button<ButtonPropsStyled>`
  width: 200px;
  height: 70px;
  border: none;
  /* background: #e88ea0; */
  background: ${({ mainButton }) => (mainButton ? '#CE31F5' : '#5E3CF5')};
  border-radius: 6px;
  font-size: 24px;
  padding: 10px;
  cursor: pointer;
`;
