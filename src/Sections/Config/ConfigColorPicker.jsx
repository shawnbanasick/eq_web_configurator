import React, { useEffect } from "react";
import { view } from "@risingstack/react-easy-state";
import appState from "../../GlobalState/appState";
import PopoverPicker from "./PopoverPicker";
import { useDebouncyFn } from "use-debouncy";

const ConfigColorPicker = (props) => {
  // let color = props.default;

  const handleOnChange = useDebouncyFn((e) => {
    appState[props.stateDesig] = e;
    localStorage.setItem(props.stateDesig, e);
    appState[props.stateDesig] = e;
  }, 200);

  useEffect(() => {
    let savedColor = localStorage.getItem(props.stateDesig);
    if (savedColor === null || savedColor === undefined) {
      savedColor = appState[props.stateDesig];
      //   color = props.default;
    } else {
      appState[props.stateDesig] = savedColor;
      //   color = savedColor;
    }
  }, [props]);

  return (
    <PopoverPicker
      color={appState[props.stateDesig]}
      onChange={handleOnChange}
      left={props.left}
    />
  );
};

export default view(ConfigColorPicker);
