import { ChangeEvent, useEffect, useState } from "react";
import Button from "./Button/Button";
import Input from "./Input/Input";

import { Homework09Wrapper, Result } from "./styles";

function Homework09() {
    const [input1Value, setInput1Value] = useState<string>('');
    const [input2Value, setInput2Value] = useState<string>('');
    const [resultValue, setResultValue] = useState<string>(''); // Стейт для хранения результата

    const handleInput1Change = (event: ChangeEvent<HTMLInputElement>) => {
        setInput1Value(event.target.value);
    };

    const handleInput2Change = (event: ChangeEvent<HTMLInputElement>) => {
        setInput2Value(event.target.value);
    };

    const handleButtonClick = () => {
        // Обновляем результат после нажатия на кнопку
        setResultValue(`${input1Value} ${input2Value}`);
    };

    useEffect(()=>{
        console.log("Update");
      }, [input2Value] );
    
      useEffect(()=>{
        console.log("Update");
      }, [input1Value] );
    


  

    return (
        <Homework09Wrapper>
            <Input
                label="Выговориться"
                value={input1Value}
                onInputChange={handleInput1Change} name={"firstComplain"} type={""} placeholder={"Давай, жалуйся на жизнь"}/>
            <Input
                label="И еще выговориться"
                value={input2Value}
                onInputChange={handleInput2Change} name={"secondComplain"} type={""} placeholder={"И еще немного"}/>

            <Button name="Жмак!" onButtonClick={handleButtonClick} />

            <Result>{resultValue}</Result> {/* Выводим результат */}
        </Homework09Wrapper>
    );
}

export default Homework09;

