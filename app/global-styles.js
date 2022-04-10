import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html::-webkit-scrollbar {
    width: 4px;
    background-color: #020e19;
    border-radius: 10px;
  }

  html::-webkit-scrollbar-thumb {
      background: linear-gradient(#00e8ff, #ff00ff); 
      border-radius: 10px;
  }

  body {
    margin: 0;
    padding: 0;
    
    font-family: 'Nunito',sans-serif;
    background-color: #020e19;

  }
`;

export default GlobalStyle;
