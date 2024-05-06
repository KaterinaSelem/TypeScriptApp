// import {Global, css} from "@emotion/react";

// const globalStyles = css`
// * {
//   box-sizing: border-box;
//   font-family: sans-serif;
// }

// body,
// html {
//   height: 100%;
//   margin: 0;
//   padding: 0;
// }

// h1,
// h2,
// h3,
// h4,
// h5,
// h6,
// p {
//   margin: 0;
//   padding: 0;
// }

// #root {
//   display: flex;
//   flex-direction: column;
//   min-height: 100%;
//   align-items: center;
// }
// `;

// function GlobalStyles (){
//     return <Global styles={globalStyles}/>
// }

// export default GlobalStyles;

import { Global, css } from '@emotion/react';

const globalStyles = css`
  * {
  box-sizing: border-box;
  font-family: sans-serif;
  }

  body,
  html {
    height: 100%;
    margin: 0;
    padding: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
    padding: 0;
  }

  #root {
    display: flex;
    flex-direction: column;
    min-height: 100%;
  }
`
function GlobalStyles() {
  return <Global styles={globalStyles} />
}

export default GlobalStyles;