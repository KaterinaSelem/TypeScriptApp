import {
  ButtonWrap,
  FactsField,
  Lesson10Component,
  ResultField,
} from './styles';
import { useEffect, useState } from 'react';

import Button from 'components/Button/Button';
import { v4 } from 'uuid';
import Spinner from 'components/Spinner/Spinner';

function Lesson10() {
  const [catFacts, setFacts] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getFact = async () => {
    try {
      setIsLoading(true);
      const response = await fetch('https://catfact.ninja/fact');
      const result = await response.json();

      if (!response.ok) {
        throw Object.assign(new Error('API Error'), {
          response: result,
        });
      } else {
        setFacts((previousValue) => [...previousValue, result.fact]);
      }
    } catch (error) {
      console.log('error!');
    } finally {
      setIsLoading(false);
    }
  };

  const catFactsElem = catFacts.map((catFact: string) => {
    return <FactsField key={v4()}>{catFact}</FactsField>;
  });

  const buttonDeleteClick = () => {
    setFacts([]);
  };

  useEffect(() => {
    getFact();
  }, []);

  const iscatFactsEmpty = catFacts.length;

  return (
    <Lesson10Component>
      <ButtonWrap>
        <Button name='GET MORE INFO' onButtonClick={getFact} />
        <Button
          name='DELETE'
          onButtonClick={buttonDeleteClick}
          disabled={!iscatFactsEmpty}
        />
      </ButtonWrap>
      {isLoading ? (
        <Spinner />
      ) : (
        <ResultField isShowBlock={!!iscatFactsEmpty}>
          {catFactsElem}
        </ResultField>
      )}
    </Lesson10Component>
  );
}

export default Lesson10;
