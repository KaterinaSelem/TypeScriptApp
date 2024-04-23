function Lesson06() {
    // 1. Типизация строк - string
    let userName: string = 'Tom';
    console.log(userName);
  
    userName = '2';
    userName = 1 + 3 + '3';
    // userName = 2;  //так делать нельзя, будет ошибка
    console.log(userName);
  
    const message: string = `Hello, ${userName}`;
  
    // 2. Типизация чисел - number
    let luckyNumber: number = 23;
    luckyNumber = 24.5;
    // luckyNumber = '1' - 23; //появляется ошибка
  
    // 3. Типизация boolean - boolean
    let isAdmin: boolean = true;
    isAdmin = false;

    // 4. Типизация null и undefined
  //Тип null принимает только одно значение - null
  let emptyVar: null = null;
  // emptyVar = undefined;

  //Тип undefined принимает только одно значение - undefined
  let exampleUnd: undefined = undefined;
  // exampleUnd = 0;

  // 5. Типизация массивов
  const colors: string[] = ['red', 'green', 'black'];
  colors.push('blue');
  colors[0] = 'yellow';
  // colors[0] = null; //ошибка типов
  console.log(colors);  

  //автоматическое определение типа
  const numbersArray = [3, 5, 4];
  // numbersArray.push('red'); //ошибка
  console.log(numbersArray);

  // 6. тип tupel (кортеж)
  const fruits: [string, number, boolean] = ['apple', 3, false];
  // fruits[3] = 'banana'; //ошибка - должно быть только 3 элемента

  
    return <div>Lesson06 - {message}</div>
  }
  
  export default Lesson06