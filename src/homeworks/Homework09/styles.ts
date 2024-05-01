import styled from '@emotion/styled';

interface ResultsBlockStyledProps {
    isShowREsult: boolean;
}

export const Homework09Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  padding: 40px;
  width: 700px;
`;

export const ResultsBlock = styled.div<ResultsBlockStyledProps>`
display: ${({ isShowREsult }) => (isShowREsult ? 'flex' : 'none')};
flex-direction: row;
gap: 20px;
padding: 40px;
`;

export const ResultWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: #c7ded0;
  font-size: 30px;
`;
