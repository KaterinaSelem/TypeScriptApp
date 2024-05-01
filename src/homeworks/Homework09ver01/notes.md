import React, { useState } from 'react';: 
В этой строке мы импортируем функцию useState из библиотеки React. 
useState - это хук, который позволяет нам добавлять состояние в функциональные компоненты React.

const [input1Value, setInput1Value] = useState("");: Мы используем хук useState для создания
состояния input1Value и функции setInput1Value, которая будет обновлять это состояние.
Передаем начальное значение пустой строки "".

const handleInput1Change = (event) => { setInput1Value(event.target.value); };: Мы определяем
функцию handleInput1Change, которая будет вызываться при изменении значения в первом инпуте.
Она обновляет состояние input1Value новым значением из события.
Аналогично пункту 5 и 6 для второго инпута.

const handleButtonClick = () => { alert(Value of Input 1: ${input1Value}\nValue of Input 2: ${input2Value}); };:
Мы определяем функцию handleButtonClick, которая будет вызываться при нажатии на кнопку. Она выводит алерт
с текущими значениями из инпутов.

Возвращаем JSX (разметку React) внутри компонента Homework09, который включает в себя компоненты Input,
Button и стилизованные блоки для вывода значений.
export default Homework09;: Мы экспортируем компонент Homework09,
чтобы он был доступен для использования в других частях приложения.