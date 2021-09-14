import appState from "../../GlobalState/appState";

const generateCssXml = () => {
  // show / hide statement numbers
  let statementNumberDisplay = appState.stylesStatementNumberDisplay;
  if (statementNumberDisplay === true || statementNumberDisplay === "true") {
    statementNumberDisplay = "";
  } else {
    statementNumberDisplay = `display: none;`;
  }

  // set statement number font size
  let statementNumberSize = appState.stylesStatementNumberSize;
  if (statementNumberSize === "large") {
    statementNumberSize = `font-size: 100%;`;
  } else if (statementNumberSize === "medium") {
    statementNumberSize = `font-size: 85%;`;
  } else {
    statementNumberSize = `font-size: 70%;`;
  }

  // set Statement number opacity
  let statementNumberOpacity = appState.stylesStatementNumberOpacity;
  if (statementNumberOpacity === "bold") {
    statementNumberOpacity = `font-weight: bold;`;
  } else if (statementNumberOpacity === "normal") {
    statementNumberOpacity = "";
  } else {
    statementNumberOpacity = `opacity: 0.5;`;
  }

  // const

  let data = `.col-centered {
  float: none;
  margin: 0 auto;
}

body {
  padding-top: 0px;
}

.textright {
  text-align: right;
}

.draggable {
  border: 1px solid;
  width: 300px;
  height: 200px;
  padding: 12px;
  font-size: 1em;
  box-shadow: 6px 6px 5px #888888;
  background-color: white;
  z-index: 999;
  text-align: center;

  /* http://maettig.com/code/css/text-overflow-ellipsis.html */
  overflow: hidden; /* required for text-overflow */
}

li.draggable {
  list-style-type: none;
}

.swappable {
  z-index: 999;
}

.cell {
  border: 1px solid;
  border-color: #d8d8d8;
  width: 100%;
  height: 60px;
  padding: 3px;
  margin-bottom: -1px;
}

.cell .swappable,
.cell .draggable-small {
  box-shadow: 3px 3px 2px #888888;
  background-color: white;
  border: 1px solid;
  height: 100%;
}

/* step #2 sorting grid css 
--------------------------------------------------*/
.cell .swappable > div,
.cell .draggable-small > div {
  width: 100%;
  height: 100%;
  /* http://maettig.com/code/css/text-overflow-ellipsis.html */
  word-wrap: break-word; /* for IE, Firefox since 3.5 and Opera since 10.5 */
  overflow: hidden; /* required for text-overflow */
  text-overflow: ellipsis; /* for IE and WebKit (Safari, Chrome) */
  -o-text-overflow: ellipsis;
  padding: 3px;
  text-align: center;
}

.cell.small-font .swappable > div,
.cell.small-font .draggable-small > div {
  font-size: 0.8em;
  line-height: 1em;
}

.heroCard {
  font-size: 1.5em;
}

.droppable-active {
  background-color: gray;
}

.droppable-active.occupied {
  background-color: red;
}

p.card-counter {
  margin-top: 10px;
  text-align: center;
  font-size: 1.2em;
}

/* bootstrap tooltip */
.tooltip {
  font-size: 5em;
}

/* step #1  -  3-column-view cards css (disagree, agree, neutral) 
----------------------------------------------------------*/
.sorted-statements {
  background-color: #d8d8d8;
  padding-top: 2px;
  padding-bottom: 5px;
  width: 960px;
  margin: 0 auto;
  height: 400px;
  min-height: 160px;
  max-height: 600px;
  text-align: center;
}

.sorted-statements p.heading {
  margin-bottom: 5px;
  text-align: center;
  font-size: 1.4em;
  font-weight: bolder;
}

.sortable .overlay {
  position: relative;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 20px;
  display: none;
  background-color: orange;
}

.sortable.active .overlay {
  display: block;
}

/* styles for disagree-neutral-agree containers 
pre-sort stack at bottom of step #1 (see above for gray container)
-------------------------------------------------- */
.sorted-statements .sortable {
  height: 325px;
  background-color: white;
  border: 1px solid;
  overflow-x: hidden;
  overflow-y: scroll;
  padding: 0;
}

/* styles for disagree-neutral-agree pre-sort stack at bottom of sort page
   step #1 custom height
-------------------------------------------------- */
#step1 {
  height: 700px;
}

.sorted-statements ul {
  padding: 0;
  position: relative;
  top: 0px;
  left: 0px;
}

.sortable .draggable {
  height: auto;
  padding-top: 2px;
  padding-top: 2px;
  box-shadow: 3px 3px 2px #888888;
  width: auto;
}

.sortable.agree .draggable {
  background-color: #9fdfbf;
}

.sortable.neutral .draggable {
  background-color: #e9e9e9;
}

.sortable.disagree .draggable {
  background-color: #ffd5d5;
}

div.agree,
li.agree {
  background-color: #9fdfbf;
}

div.neutral,
li.neutral {
  background-color: #e9e9e9;
}

div.disagree,
li.disagree {
  background-color: #ffd5d5;
}

#login .user-code-form {
  margin-top: 30px;
}

/* step1 */
/* hide all except the first statement */
#step1 {
  padding-top: 50px;
}

#step1 #statements {
  min-height: 200px;
}

#step1 #statements div:first-child {
  display: block;
}

#step1 #statements {
  margin-bottom: 20px;
}

.sorted-statements .next-button {
  padding-top: 50px;
  padding-bottom: 50px;
}

.step3Feeder {
  height: 150px;
}

#step3 {
  padding-right: 10px;
}

#step4 div.comment-heading {
  text-align: center;
  font-size: 1.5em;
  font-weight: bold;
  margin-bottom: 10px;
}

#step4 div.comment textarea {
  width: 100%;
  height: 100%;
}

#step4 div.comment {
  background-color: #d8d8d8;
}

#step4 div.comment div.statement-card {
  background-color: white;
  border: 1px solid;
  width: 100%;
  min-height: 70px;
  padding: 5px;
  font-size: 1em;
  box-shadow: 6px 6px 5px #888888;
}

#step4 div.comment > div {
  padding: 7px;
  height: 100%;
}

#step4 > div.row {
  margin-top: 40px;
}

#step5 div.question-label {
  background-color: #d8d8d8;
  text-align: center;
  font-size: 1.2em;
  font-weight: bolder;
  margin-top: 20px;
  margin-bottom: 10px;
  padding-top: 2px;
  padding-bottom: 2px;
}

#step5 div.question-note {
  background-color: #ede04d;
  font-size: 1.2em;
  margin-bottom: 5px;
  padding: 10px 25px;
}

#step5 div.question-note-bg {
  background-color: #fafafa;
  font-size: 1.2em;
  margin-bottom: 5px;
  padding: 10px 25px;
}

#step5 div.question-input {
  background-color: #fafafa;
  font-size: 1.2em;
  margin-bottom: 5px;
  padding: 10px 25px;
}

#step5 .row.is-required .question-input {
  background-color: #ffd5d5;
}

#step5 div.question-input input {
  margin-right: 25px;
}

#step5 div.text-center input {
  margin-right: 0px;
}

#step5 div.question-input textarea {
  width: 100%;
}

#step5 .step5SubmitButton {
  margin-top: 25px;
}

#submit {
  padding-top: 30px;
}

.grid .rating {
  text-align: center;
  font-size: 1.2em;
  border: 1px solid;
  border-color: #a8a8a8;
  padding-top: 3px;
  padding-bottom: 3px;
  font-weight: bold;
  text-align: center;
}

.grid {
  /* width: 1260px; */
  margin: 10px auto 10px auto;
}

.grid table {
  table-layout: fixed;
  /* width: 1260px; */
  /* border: 2px solid red; */
  margin: 0 auto;
}

/* @media screen and (max-width: 992px) {
  .column {
    width: 50%;
  }
} */

/* step #2 and step #3 font size
---------------------------------*/
/* for 2160px */
@media (min-height: 1908px) {
  .grid td {
    vertical-align: top;
    padding: 0;
    font-size: ${appState.stylesHdFontSize}px;
    line-height: 1.2em;
  }
}

/* for 1440px */
@media (min-height: 1188px) and (max-height: 1907px) {
  .grid td {
    vertical-align: top;
    padding: 0;
    line-height: 1.2em;
    font-size: ${appState.stylesXlargeFontSize}px;
  }
}

/* for 1080 */
@media (min-height: 828px) and (max-height: 1187px) {
  .grid td {
    vertical-align: top;
    padding: 0;
    line-height: 1.2em;
    font-size: ${appState.stylesLargeFontSize}px;
    /* font-size: 1.2vh; */
  }
}

/* for 900px */
@media (min-height: 818px) and (max-height: 827px) {
  .grid td {
    vertical-align: top;
    padding: 0;
    line-height: 1.2em;
    font-size: ${appState.stylesMediumFontSize}px;
    /* font-size: 1.4vh; */
  }
}

/* for 720 */
@media (min-height: 655px) and (max-height: 817px) {
  .grid td {
    vertical-align: top;
    padding: 0;
    line-height: 1.2em;
    font-size: ${appState.stylesSmallFontSize}px;
    /* font-size: 1.4vh; */
  }
}

/* for lowest */
@media (min-height: 120px) and (max-height: 654px) {
  .grid td {
    vertical-align: top;
    padding: 0;
    line-height: 1.2em;
    font-size: ${appState.stylesXsmallFontSize}px;
    /* font-size: 0.8vh; */
  }
}

@media (hover: none) and (min-width: 1366px) {
  .grid td {
    vertical-align: top;
    padding: 0;
    line-height: 1.1;
    font-size: ${appState.stylesIpadLargeFontSize}px;
    /* font-size: 0.8vh; */
  }
}

@media (hover: none) and (max-width: 1024px) {
  .grid td {
    vertical-align: top;
    padding: 0;
    line-height: 1;
    font-size: ${appState.stylesIpadSmallFontSize}px;
    /* font-size: 0.8vh; */
  }
}

.grid-heading {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

/* "Disagree  Agree" text for table heading */
.tableLabelText {
  font-size: 1.4em !important;
  color: gray;
  font-weight: bold;
}

.tableLableCenterText {
  margin: 0 auto;
  font-size: 1.4em !important;
  line-height: 1.2em;
  color: white;
}
/* Conditions of Instruction - editable from config.xml 
--------------------------------------------------*/
.tableLableCenterTextDiv {
  background-color: black;
  padding-right: 5px;
  padding-left: 5px;
  border-radius: 3px;
  margin-bottom: 10px;
  /* display: none; */
}

/* draggable helper */
.draggable.dragging-onto-grid {
  border: 1px solid;
  width: 100px;
  height: 70px;
  padding: 2px;
  font-size: 1em;
  box-shadow: 10px 10px 5px #888888;
  display: block;
}

.draggable.dragging-onto-grid.small-font {
  font-size: 0.8em;
  line-height: 1em;
}

.swappable div.swap-image {
  display: none;
  width: 100%;
  height: 100%;
  padding-top: 7px;
  position: absolute;
  top: 0;
  left: 0;
  font-size: 3em;
  font-weight: bolder;
  text-align: center;
  background-color: rgb(200, 200, 200);
  background-color: rgba(200, 200, 200, 0.5); /* will not work on IE8 */
}

.swappable.swap-possible div.swap-image {
  display: block;
}

/* #wrap {
  min-height: 100%;
  height: auto !important;
  height: 100%;
  margin: 0 auto -60px;
} */

/* Sticky footer styles
-------------------------------------------------- */
html {
  position: relative;
  min-height: 100%;
}
body {
  /* Margin bottom by footer height */
  margin-bottom: 60px;
  height: 100%;
}
.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  /* Set the fixed height of the footer here */
  height: 60px;
  background-color: #f5f5f5;

  padding-top: 15px;
}

/* new statement number styles
-------------------------------------------------- */
/*write test */

.idNum {
  margin-right: 5px;
  ${statementNumberSize}
  ${statementNumberOpacity}
  ${statementNumberDisplay}
}

/* custom help button css - override bootstrap settings
-------------------------------------------------- */
.progressAdj {
  padding-top: 5px;
}

/* step #2 custom sort grid centering - override bootstrap settings
-------------------------------------------------- */
.step2ContAdj {
  margin: 0 auto;
}

.container {
  /* margin-left: 20px; */
  margin: 0 auto;
  /* border: 2px solid purple; */
}

.step1Table {
  width: 70vw;
  min-width: 960px;
  max-width: 1300px;
  margin: 0 auto;
}

.centerDiv {
  margin: 0 auto;
}

/* step #2 feeder height
---------------------------------------------*/
#step2 > div.row.sorted-statements {
  height: 150px;
  width: 960px;
  margin: 0 auto;
}

.step2col {
  height: 150px;
  overflow: hidden;
}

.userNameDiv {
  margin-top: 25px;
  margin-bottom: 25px;
}

/* Prevent bootstrap-caused page shifting on modal open
---------------------------------------------*/
body.modal-open {
  overflow: auto;
}
  `;

  return data;
};

export default generateCssXml;
