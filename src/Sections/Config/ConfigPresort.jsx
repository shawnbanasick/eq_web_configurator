import React, { useState } from "react";
import { view } from "@risingstack/react-easy-state";
import appState from "../../GlobalState/appState";
import PopoverPicker from "./PopoverPicker";

// import styled, { keyframes } from "styled-components";
// import GlobalStyle from "../../Utils/GlobalStyle";
// import GeneralButton from "../../Utils/GeneralButton";
// import exportToXml from "../../Utils/exportToXml";
// import RadioButtons from "../../Utils/RadioButtons";
// import UserTextInput from "../../Utils/UserTextInput";
// import Survey from "../Survey/Survey";
// import generateConfigXml from "../Config/generateConfigXml";
// import FadeIn from "./FadeIn";
// import UserNumberInput from "../../Utils/UserNumberInput";
// import { HexColorPicker, HexColorInput } from "react-colorful";

const ConfigPresort = (props) => {
  const [color, setColor] = useState(props.default);

  const handleOnChange = (e) => {
    appState[props.card] = e;
    setColor(e);
  };

  return <PopoverPicker color={color} onChange={handleOnChange} />;
};

export default view(ConfigPresort);
