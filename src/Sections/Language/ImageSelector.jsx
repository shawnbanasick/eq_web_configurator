import React from "react";
import { view } from "@risingstack/react-easy-state";
import appState from "../../GlobalState/appState";
import testImage from "../../assets/images/testImage.png";

const ImageSelector = () => {
  const selector = appState.imageToShow;

  if (selector === "testImage") {
    return <img src={testImage} alt="s"></img>;
  }
};

export default view(ImageSelector);
