import styled from "@emotion/styled";

export const SpinnerComponent = styled.div`
border: 4px solid rgba*(0,0,0,1);
border-left: blue;
border-radius: 50%;
width: 50px;
height: 50px;
animation: spin 1s liner infinite;

@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}
`