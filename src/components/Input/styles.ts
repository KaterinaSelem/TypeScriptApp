import styled from '@emotion/styled';

export const InputComponentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
  height: fit-content;
`;

export const InputLabel = styled.label`
  font-size: 16px;
  color: #6f6f6f;
`;

export const InputComponent = styled.input`
  width: 100%;
  height: 50px;
  padding: 12px;
  outline: none;
  border: 1px solid black;
  border-radius: 4px;
  font-size: 16px;

  &::placeholder {
    color: #6f6f6f;
  }
`;
export const ErrorMessage = styled.p`
  color: red;
  font-size: 16px;
  height: 18px;
`;

// export const Lesson09Component = styled.div`
//  display: flex;
//  flex-direction: column;
//  align-items: center;
//  gap: 30px;
//  padding: 40px;
// `

// export const InputExample = styled.input`
// width: 200px;
// height: 70px;
// border:  2px solid blue;
//  padding: 10px;
//  font-size: 24px;
//  border-radius: 4px;
// `

// export const Result = styled.p`
// font-size: 40px;
// `;
