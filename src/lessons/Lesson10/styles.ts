import styled from "@emotion/styled"

interface ResultFieldStyledProps {
  isShowBlock: boolean;
}


export const Lesson10Component = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 gap: 30px;
 padding: 40px;
`

export const ButtonWrap = styled.div`
width: 500px;
 display: flex;
 flex-direction: row;
 align-items: center;
 gap: 35px;
 padding: 40px;
`

export const ResultField = styled.div<ResultFieldStyledProps>`
display: ${({isShowBlock})=>isShowBlock? 'flex': 'none' };
flex-direction: column;
gap: 20px;
max-width: 500px;
 max-height: 700px;
  overflow-y: auto;
  padding: 20px;
  background-color: #BDD8EB;
  font-size: 18px;
`

export const FactsField = styled.div`
border: 2px solid;
padding: 10px;
`