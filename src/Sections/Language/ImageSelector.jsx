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

const ImageSelector = () => {
  const selector = appState.imageToShow;
  console.log(selector);

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
};

export default view(ImageSelector);
