import { ChangeEvent, useEffect, useState } from 'react';
import { InputExample, Lesson09Component, Result } from './styles';

function Lesson09() {
  const [inputValue, setInputValue] = useState<string>('');
  const [quote, setQuote] = useState<string>('');

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const getActivity = async () => {
    try {
      const responce = await fetch(
        'https://api.breakingbadquotes.xyz/v1/quotes'
      );
      const result = await responce.json();
      console.log(result[0].quote);
      if (!responce.ok) {
        throw Object.assign(new Error('API Error'), {
          responce: result,
        });
      } else {
        setQuote(result[0].quote);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // getActivity();

  useEffect(() => {
    console.log('Mounting');
    getActivity();
  }, []);

  useEffect(() => {
    console.log('Update');
    if (quote) {
      getActivity();
    }
  }, [inputValue]);

  return (
    <Lesson09Component>
      <InputExample
        name='example'
        placeholder='example text'
        onChange={onChangeInput}
      />
      <Result>{inputValue}</Result>
      <Result>{quote}</Result>
    </Lesson09Component>
  );
}

export default Lesson09;
