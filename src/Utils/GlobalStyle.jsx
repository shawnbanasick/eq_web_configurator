import { createGlobalStyle } from "styled-components";
import ContrailOne from "./ContrailOne-Regular.ttf";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Contrail';
    src: url(${ContrailOne}) format('truetype');
    font-weight: 400;
    font-style: normal;
    font-display: auto;
    /* font-size: 3vw; */
  }
  h1 {
    font-family: 'Contrail';
  }

  h2 {
    font-family: 'Contrail';
  }

  h3 {
      margin-top: 50px;
      margin-bottom: 5px !important;
      margin-left: 30px;
      text-align: left;
      font-family: 'Contrail';
  }

`;

export default GlobalStyle;
