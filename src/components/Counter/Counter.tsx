
import Button from "components/Button/Button";
import { CounterProps } from "./types";
import { ButtonControlStuled, CounterWrapper, Paragrath } from "./styles";

function Counter({ countValue, onMinusClick, onPlusClick }: CounterProps) {
  return (
    <CounterWrapper>
      <ButtonControlStuled>
        <Button onButtonClick={onMinusClick} name="-" />
      </ButtonControlStuled>
      <Paragrath>{countValue}</Paragrath>
      <ButtonControlStuled>
        <Button onButtonClick={onPlusClick} name="+" />
      </ButtonControlStuled>
    </CounterWrapper>
  );
}

export default Counter;