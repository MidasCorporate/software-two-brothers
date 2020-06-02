import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';
import 'react-perfect-scrollbar/dist/css/styles.css';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

/* * {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

*:focus {
  outline: 0;
} */

html {
  font-size: 62.5%;
  @media (max-width: 1080px) {
    font-size: 58%;
  }

  @media (max-width: 720px) {
    font-size: 54%;
  }
}

/* body {
  -webkit-font-smoothing: antialiased;
}

body, input, button {
font: 14px 'Roboto', sans-serif;
}

button {
  cursor: pointer;
} */
`;
