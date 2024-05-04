import Layout from "components/Layout/Layout";

import GlobalStyles from "styles/GlobalStyles";


// import "./App.css";

//Lessons

// import Lesson06 from "./lessons/lesson06/Lesson06";
// import Lesson07 from "./lessons/Lesson07/Lesson07";
// import Lesson08 from "lessons/Lesson08/Lesson08";
// import Lesson09 from "lessons/Lesson09/Lesson09";
// import Lesson10 from "lessons/Lesson10/Lesson10";
// import Lesson11 from "lessons/Lesson11/Lesson11";
//Homeworks
// import Homework07 from "homeworks/Homework07/Homework07";
// import Homework09ver1 from "./homeworks/Homework09ver01/Homework09ver1";
// import Homework11 from "homeworks/Homework11/Homework11";
import Homework12 from "homeworks/Homework12/Homework12";
//Consultation

function App() {
  return (
   
    <>
       <GlobalStyles/>
       <Layout/>
      {/* <Lesson06 /> */}
      {/* <Lesson07/> */}
      {/* <Homework07/> */}
      {/* <Lesson09/> */}
      {/* <Homework09ver1/> */}
      {/* <Lesson10/> */}
      {/* <Lesson11/> */}
      {/* <Homework11/> */}
      <Homework12/>
    </>
  );
}

export default App;
