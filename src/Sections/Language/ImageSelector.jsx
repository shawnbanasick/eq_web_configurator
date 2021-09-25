import React from "react";
import { view } from "@risingstack/react-easy-state";
import appState from "../../GlobalState/appState";
import footerImage from "../../assets/images/footer.png";
import landingImage from "../../assets/images/landingImage.png";

const ImageSelector = () => {
  const selector = appState.imageToShow;
  console.log(selector);

  if (selector === "footerImage") {
    return <img src={footerImage} alt="s"></img>;
  }
  if (selector === "landingImage") {
    return <img src={landingImage} alt="s"></img>;
  }
};

export default view(ImageSelector);
