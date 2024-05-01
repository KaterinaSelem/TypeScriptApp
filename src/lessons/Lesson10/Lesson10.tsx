import { ButtonWrap, FactsField, Lesson10Component, ResultField } from './styles';
import { useEffect, useState } from 'react';


import Button from 'components/Button/Button';
import { v4 } from 'uuid';
import Spinner from 'components/Spinner/Spinner';

function Lesson10() {

  const [catFacts, setFacts] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<Boolean>(false);


  const getFact = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("https://catfact.ninja/fact");
      const result = await response.json();

      if (!response.ok) {
        throw Object.assign(new Error('API Error'), {
          response: result
        });
      } else {
        setFacts(previousFacts => [...previousFacts, result.fact])
      }
    } catch (error) {
             console.log("error!");
    }finally{
      setIsLoading(false);
    }
  }

  const catFactsElem = catFacts.map((catFact: string) => {
    return <FactsField key={v4()}>{catFact}</FactsField>  
  })

  const buttonDeleteClick = () => {
    setFacts([]); 
  };

  useEffect(() => {
    getFact();
  }, []);



  return (
    <Lesson10Component>
      <ButtonWrap>
        <Button name='GET MORE INFO' onButtonClick={getFact}></Button>
        <Button name='DELETE' onButtonClick={buttonDeleteClick} disabled={!!catFacts.length}></Button>
      </ButtonWrap>
      {isLoading ? <Spinner/> : 
      <ResultField>{catFacts}</ResultField>}
    </Lesson10Component>
  );
}

export default Lesson10;
