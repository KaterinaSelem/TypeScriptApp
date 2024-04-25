import {
  BoxComponent,
  Lesson08Component,
  ButtonComponent,
  InfoBoxComponent,
} from './styles';

function Lesson08() {
  {
    /* <p style = {{fontSize: "24px", color: "blue"}}> */
  }
  const styleObject = {
    fontSize: '42px',
    color: 'red',
  };
  const typeButton = false;
  
  return (
    <Lesson08Component>
      <InfoBoxComponent>INFO</InfoBoxComponent>
      <BoxComponent>My first emotion Block!</BoxComponent>
      <ButtonComponent mainButton>CLICK</ButtonComponent>
      <ButtonComponent mainButton = {typeButton}>CLICK</ButtonComponent>

      {/* <p style={styleObject}>Hello!</p>
      <div style={styleObject}>Bye!</div> */}
    </Lesson08Component>
  );
}

export default Lesson08;
