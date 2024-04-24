import "./stules.css"

function Lesson07() {
    type CustomArrayType<T = string> = T[];

const numbersArray: CustomArrayType<number> = [2,3];
const stringArray: CustomArrayType = ["2","3"];

type CustomArrayTypelType<T=string> = [string, T];
const arrayMix1: CustomArrayTypelType = ["app;e", "2"];
const arrayMix2: CustomArrayTypelType<number> = ["app;e", 2];

interface Fruits {
    name: string,
    weight: number
};   

const fruits1: Fruits = {
    name: "Apple",
    weight: 4
};

interface FruitsGeneric<T> {
    name: string,
    weight: T //вес теперь может быть вообще любым типом
} ;

const fruits2: FruitsGeneric<string> = {
    name: "Apple",
    weight: "4"
}; 

enum Colors {Red, Black, Green};
let color: Colors = Colors.Red;
console.log(color);

enum WeathersCode {
    SQ = "SQ",
    PO = "PO",
    FC = "FC",
    BR = "BR",
    HZ = "HZ",
    FU = "FU",
    DS = "DS",
    SS = "SS",
  }

  const decode = (codeOfWeather: WeathersCode): string => {
    switch (codeOfWeather) {
      case WeathersCode.SQ:
        return "шквал";
      case WeathersCode.PO:
        return "пыльный вихрь";
      case WeathersCode.FC:
        return "торнадо";
      case WeathersCode.BR:
        return "дымка (видимость от 1 до 9 км)";
      case WeathersCode.HZ:
        return "мгла (видимость менее 10 км)";
      case WeathersCode.FU:
        return "дым (видимость менее 10 км)";
      case WeathersCode.DS:
        return "пыльная буря (видимость менее 10 км)";
      case WeathersCode.SS:
        return "песчаная буря (видимость менее 10 км) ";
    }
  };
  console.log(decode(WeathersCode.FC));

return <div>Lesson07</div>
  
}
export default Lesson07;