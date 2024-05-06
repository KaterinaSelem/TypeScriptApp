import styled from "@emotion/styled";

export const EmployeeFormComponent = styled.form`
display: flex;
  flex-direction: column;
  gap: 30px;
  width: 590px;
  height: fit-content;
  padding: 60px;
  border: 1px solid black;
  border-radius: 4px;
  background-color: white;
`;
export const Checkbox = styled.input`
width: 25px;
height: 25px;`

export const CheckboxLabel = styled.label`
font-size: 24px;`

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  `

export const FormWrapper = styled.div`
display: flex;
gap: 30px;
`

export const ErrorAgreementMessage = styled.p`
color: red;
font-size: 16px;
height: 18px;
`