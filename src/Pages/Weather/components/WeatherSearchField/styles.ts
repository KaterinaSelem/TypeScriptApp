import styled from '@emotion/styled';

export const InputComponentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: fit-content;
  
`;

export const InputLabel = styled.label`
  font-size: 16px;
  color: white;
`;

export const InputComponent = styled.input`
background-color: white;
width: 550px;
height: 48px;
padding: 12px 12px 12px 20px;
border-radius: 16px;
border: 1px solid;
opacity: 10%;




  &::placeholder {
    color: #6f6f6f;
  }
`;
