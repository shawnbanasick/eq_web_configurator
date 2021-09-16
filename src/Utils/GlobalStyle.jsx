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

/* ******
  CSS for color picker 
  ********   */
  .picker {
    position: relative;
  }
  
  .swatch {
    width: 28px;
    height: 28px;
    border-radius: 8px;
    border: 3px solid #fff;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.3), inset 0 0 0 1px rgba(0, 0, 0, 0.5);
    cursor: pointer;
  }
  
  /* .popover {
    position: absolute;
    top: calc(100% + 2px);
    left: 0px;
    border-radius: 9px;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    z-index: 999;
  }
   */
  .fadeOut{
     opacity:0;
     width:0;
     height:0;
     transition: width 0.5s 0.5s, height 0.5s 0.5s, opacity 0.5s;

}
  .fadeIn{
      opacity:1;
      width:100%;
      height:100%;
      transition: width 0.5s, height 0.5s, opacity 0.5s 0.5s;

  }


`;

export default GlobalStyle;
