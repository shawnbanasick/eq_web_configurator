import React, { useState } from "react";
import { view } from "@risingstack/react-easy-state";
import styled, { keyframes } from "styled-components";
import GlobalStyle from "../../Utils/GlobalStyle";
import GeneralButton from "../../Utils/GeneralButton";
import exportToXml from "../../Utils/exportToXml";
import RadioButtons from "../../Utils/RadioButtons";
import UserTextInput from "../../Utils/UserTextInput";
import Survey from "../Survey/Survey";
import generateConfigXml from "../Config/generateConfigXml";
import appState from "../../GlobalState/appState";
import FadeIn from "./FadeIn";
import UserNumberInput from "../../Utils/UserNumberInput";
import { HexColorPicker, HexColorInput } from "react-colorful";
import { PopoverPicker } from "./PopoverPicker";

const ConfigPresort = () => {
  const [color, setColor] = useState("#83cafe");
  return <PopoverPicker color={color} onChange={setColor} />;
};

export default ConfigPresort;
