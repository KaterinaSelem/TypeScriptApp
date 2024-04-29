import { ButtonWrap, Lesson10Component, ResultField } from './styles';
import { ChangeEvent, useEffect, useState } from 'react';

import Button from 'components/Button/Button';

function Lesson10() {
  const [outputValue, setOutputValue] = useState<string>('');
  const [facts, setFacts] = useState<string[]>([]);

  const onChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
    setOutputValue(event.target.value);
  };

  const getFact = async () => {
    try {
      const response = await fetch("https://catfact.ninja/fact")
      const result = await response.json();

      if (!response.ok) {
        throw Object.assign(new Error('API Error'), {
          response: result
        });
      } else {
        setFacts(previousFacts => [...previousFacts, result.fact])
      }
    } catch (error) {

    }
  }

  {facts.map((fact, index) => (
    <ResultField key={index}>{fact}</ResultField>  // вот так придумал чат и мне понравилось
  ))}

  const buttonDeleteClick = () => {
    setFacts([]); 
  };

  useEffect(() => {
    console.log('Mounting');
    getFact();
  }, []);



  return (
    <Lesson10Component>
      <ButtonWrap>
        <Button name='get more info' onButtonClick={getFact}></Button>
        <Button name='delete' onButtonClick={buttonDeleteClick}></Button>
      </ButtonWrap>

      <ResultField>{facts}</ResultField>
    </Lesson10Component>
  );
}

export default Lesson10;
