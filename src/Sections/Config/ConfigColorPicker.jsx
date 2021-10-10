import React, { useState, useEffect } from "react";
import { view } from "@risingstack/react-easy-state";
import appState from "../../GlobalState/appState";
import PopoverPicker from "./PopoverPicker";
import { useDebouncyFn } from "use-debouncy";

const ConfigColorPicker = (props) => {
  const [color, setColor] = useState(props.default);

  const handleOnChange = useDebouncyFn((e) => {
    appState[props.stateDesig] = e;
    localStorage.setItem(props.stateDesig, e);
    setColor(e);
  }, 200);

  useEffect(() => {
    let savedColor = localStorage.getItem(props.stateDesig);
    if (savedColor === null || savedColor === undefined) {
      savedColor = appState[props.stateDesig];
      setColor(props.default);
    } else {
      appState[props.stateDesig] = savedColor;
      setColor(savedColor);
    }
  }, [props]);

  return (
    <PopoverPicker color={color} onChange={handleOnChange} left={props.left} />
  );
};

export default view(ConfigColorPicker);
