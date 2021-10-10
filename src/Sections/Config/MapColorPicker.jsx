import React, { useState, useEffect } from "react";
import { view } from "@risingstack/react-easy-state";
import appState from "../../GlobalState/appState";
import PopoverPicker from "./PopoverPicker";
import { useDebouncyFn } from "use-debouncy";
import setStepColors from "./setStepColors";
import setTintColors from "./setTintColors";

const ConfigColorPicker = (props) => {
  const [color, setColor] = useState(props.default);

  const handleOnChange = useDebouncyFn((e) => {
    console.log(e);
    appState[props.stateDesig] = e;
    localStorage.setItem(props.stateDesig, e);
    setColor(e);
    appState.mapColorPalette = "Custom";
    appState.mapColorPaletteCustomActive = true;
    appState.mapColorPaletteStepsActive = false;
    appState.mapColorPaletteTintsActive = false;
  }, 200);

  const colorPalette = appState.mapColorPalette;

  useEffect(() => {
    if (colorPalette === "Steps") {
      setStepColors();
    }
    if (colorPalette === "Tints") {
      setTintColors();
    }
    let savedColor = localStorage.getItem(props.stateDesig);
    console.log(savedColor);
    if (savedColor === null || savedColor === undefined) {
      savedColor = appState[props.stateDesig];
      setColor(props.default);
    } else {
      setColor(savedColor);
    }
  }, [props, colorPalette]);

  return (
    <PopoverPicker color={color} onChange={handleOnChange} left={props.left} />
  );
};

export default view(ConfigColorPicker);
