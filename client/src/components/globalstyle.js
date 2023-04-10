import { GlobalStyleComponent, createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  :root {
    --vh : 100%;
  }

  body {
  padding: 0;
  margin: 0;
  font-family: 'NanumBarunGothic';

  }
  div {
    box-sizing: border-box;
  }

  h1, h2, h3, h4, h5, p, span {
    padding: 0;
    margin: 0;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    appearance: none;
    -webkit-appearance: none;
  }

  select {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
  }

  input, textarea, button {
    appearance: none;
    -webkit-appearance: none;
  }
`

export default GlobalStyle;