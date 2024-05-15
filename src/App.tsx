import { BrowserRouter, Routes, Route } from "react-router-dom";

import GlobalStyles from "styles/GlobalStyles";
// import Layout from "components/Layout/Layout";

// import Home from "Pages/Home/Home";
// import About from "Pages/About/About";
// import Users from "Pages/Users/Users";

import Weather from './Pages/Weather/components/Weather'


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
//Consultation

function App() {
  return (
   
    <BrowserRouter>
    
       <GlobalStyles/>
       {/* <Layout>
        <Routes> */}
        {/* <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/users' element={<Users />} />
          <Route path='*' element='Page not found!' /> */}

        {/* </Routes> */}
       {/* <Home />
       <About />
       <Users /> */}
       {/* </Layout> */}
     
      {/* <Lesson06 /> */}
      {/* <Lesson07/> */}
      {/* <Homework07/> */}
      {/* <Lesson09/> */}
      {/* <Homework09ver1/> */}
      {/* <Lesson10/> */}
      {/* <Lesson11/> */}
      {/* <Homework11/> */}

      <Weather />
    </BrowserRouter>
  );
}

export default App;
