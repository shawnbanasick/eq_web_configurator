import React from "react";
import { view } from "@risingstack/react-easy-state";
import appState from "../../GlobalState/appState";
import footerImage from "../../assets/images/footer.png";
import landingImage from "../../assets/images/landingImage.png";
import landingImage2 from "../../assets/images/landingModalImage.png";
import accessImage from "../../assets/images/accessImage.png";
import presortImage from "../../assets/images/presortImage.png";
import presortImage2 from "../../assets/images/presortImage2.png";
import presortImage3 from "../../assets/images/presortImage3.png";
import presortImage4 from "../../assets/images/presortImage4.png";
import sortImage from "../../assets/images/sortImage.png";
import sortImage2 from "../../assets/images/sortImage2.png";
import sortImage3 from "../../assets/images/sortImage3.png";
import sortImage4 from "../../assets/images/sortImage4.png";
import sortImage5 from "../../assets/images/sortImage5.png";
import postsortImage from "../../assets/images/postsortImage.png";
import postsortImage2 from "../../assets/images/postsortImage2.png";
import surveyImage from "../../assets/images/surveyImage.png";
import surveyImage2 from "../../assets/images/surveyImage2.png";
import surveyImage3 from "../../assets/images/surveyImage3.png";
import submitImage from "../../assets/images/submitImage.png";
import submitImage2 from "../../assets/images/submitImage2.png";
import submitImage3 from "../../assets/images/submitImage3.png";
import submitImage4 from "../../assets/images/submitImage4.png";
import localPanel from "../../assets/images/localPanel.png";
import localPanel2 from "../../assets/images/localPanel2.png";
import localPanel3 from "../../assets/images/localPanel3.png";
import localSubmit from "../../assets/images/localSubmit.png";
import localSubmit2 from "../../assets/images/localSubmit2.png";

const ImageSelector = () => {
  const selector = appState.imageToShow;

  if (selector === "footerImage") {
    return <img src={footerImage} alt="s"></img>;
  }
  if (selector === "landingImage") {
    return <img src={landingImage} alt="s"></img>;
  }
  if (selector === "landingImage2") {
    return <img src={landingImage2} alt="s"></img>;
  }

  if (selector === "accessImage") {
    return <img src={accessImage} alt="s"></img>;
  }

  if (selector === "localPanel") {
    return <img src={localPanel} alt="s"></img>;
  }
  if (selector === "localPanel2") {
    return <img src={localPanel2} alt="s"></img>;
  }
  if (selector === "localPanel3") {
    return <img src={localPanel3} alt="s"></img>;
  }
  if (selector === "localSubmit") {
    return <img src={localSubmit} alt="s"></img>;
  }
  if (selector === "localSubmit2") {
    return <img src={localSubmit2} alt="s"></img>;
  }

  if (selector === "presortImage") {
    return <img src={presortImage} alt="s"></img>;
  }
  if (selector === "presortImage2") {
    return <img src={presortImage2} alt="s"></img>;
  }
  if (selector === "presortImage3") {
    return <img src={presortImage3} alt="s"></img>;
  }
  if (selector === "presortImage4") {
    return <img src={presortImage4} alt="s"></img>;
  }
  if (selector === "sortImage") {
    return <img src={sortImage} alt="s"></img>;
  }
  if (selector === "sortImage2") {
    return <img src={sortImage2} alt="s"></img>;
  }
  if (selector === "sortImage3") {
    return <img src={sortImage3} alt="s"></img>;
  }
  if (selector === "sortImage4") {
    return <img src={sortImage4} alt="s"></img>;
  }
  if (selector === "sortImage5") {
    return <img src={sortImage5} alt="s"></img>;
  }
  if (selector === "postsortImage") {
    return <img src={postsortImage} alt="s"></img>;
  }
  if (selector === "postsortImage2") {
    return <img src={postsortImage2} alt="s"></img>;
  }
  if (selector === "surveyImage") {
    return <img src={surveyImage} alt="s"></img>;
  }
  if (selector === "surveyImage2") {
    return <img src={surveyImage2} alt="s"></img>;
  }
  if (selector === "surveyImage3") {
    return <img src={surveyImage3} alt="s"></img>;
  }
  if (selector === "submitImage") {
    return <img src={submitImage} alt="s"></img>;
  }
  if (selector === "submitImage2") {
    return <img src={submitImage2} alt="s"></img>;
  }
  if (selector === "submitImage3") {
    return <img src={submitImage3} alt="s"></img>;
  }
  if (selector === "submitImage4") {
    return <img src={submitImage4} alt="s"></img>;
  }
};

export default view(ImageSelector);
