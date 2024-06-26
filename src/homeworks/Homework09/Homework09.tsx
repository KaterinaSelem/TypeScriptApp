import { Homework09Wrapper, ResultWrapper, ResultsBlock } from './styles';
import { ChangeEvent, useState } from 'react';

import Input from 'components/Input/Input';
import Button from 'components/Button/Button';


function Homework09() {
    const [firstComplain, setFirstComplain] = useState<string>('');
    const [SecondComplain, setSecondComplain] = useState<string>('');
    const [isShowREsult , setIsShowREsult] = useState<boolean>(false);

    const onFirstComplainInput = (event: ChangeEvent<HTMLInputElement>) : void => {
        setFirstComplain(event.target.value)
    }

    const onSecondComplainInput = (event: ChangeEvent<HTMLInputElement>) : void => {
        setSecondComplain(event.target.value)
    }

    const onShowResult = () => {
        // setIsShowREsult(true)
        setIsShowREsult(!isShowREsult);//меняет состояние на противоположное тому что храниться в state при каждом клике
    }

  return (
    <Homework09Wrapper>
      <Input
      value={firstComplain}
        label='Выговориться'
        onInputChange={onFirstComplainInput}
        name={'firstComplain'}
        type={''}
        placeholder={'Давай, жалуйся на жизнь'}
      />
      <Input
      value={SecondComplain}
        label='И еще выговориться'
        onInputChange={onSecondComplainInput}
        name={'secondComplain'}
        type={''}
        placeholder={'И еще немного'}
      />
      <Button name='Show Notes'onButtonClick={onShowResult}/>
      <ResultsBlock isShowREsult = {isShowREsult}>
        <ResultWrapper>{firstComplain}</ResultWrapper>
        <ResultWrapper>{SecondComplain}</ResultWrapper>

      </ResultsBlock>
    </Homework09Wrapper>
  );
}

export default Homework09;
