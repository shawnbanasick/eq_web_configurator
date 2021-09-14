import React, { useState } from "react";
import { view } from "@risingstack/react-easy-state";
import appState from "../../GlobalState/appState";
import PopoverPicker from "./PopoverPicker";
import { useDebouncyFn } from "use-debouncy";

const ConfigColorPicker = (props) => {
  const [color, setColor] = useState(props.default);

  const handleOnChange = useDebouncyFn((e) => {
    console.log(e);
    appState[props.card] = e;
    setColor(e);
  }, 200);

  return <PopoverPicker color={color} onChange={handleOnChange} />;
};

export default view(ConfigColorPicker);
