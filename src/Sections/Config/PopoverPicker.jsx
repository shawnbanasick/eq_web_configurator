import React, { useCallback, useRef, useState } from "react";
import styled from "styled-components";
import { HexColorPicker, HexColorInput } from "react-colorful";
import { view } from "@risingstack/react-easy-state";

import useClickOutside from "./useClickOutside";

const PopoverPicker = (props) => {
  const color = props.color;
  const onChange = props.onChange;
  const popover = useRef();
  const [isOpen, toggle] = useState(false);

  const close = useCallback(() => toggle(false), []);
  useClickOutside(popover, close);

  return (
    <div className="picker">
      <div
        className="swatch"
        style={{ backgroundColor: color }}
        onClick={() => toggle(true)}
      />

      {isOpen && (
        <PopoverContainer ref={popover}>
          <HexColorPicker color={color} onChange={onChange} />
          <HexColorInput color={color} onChange={onChange} />
        </PopoverContainer>
      )}
    </div>
  );
};

export default view(PopoverPicker);

const PopoverContainer = styled.div`
  position: absolute;
  overflow: auto;
  top: calc(100% + 10px);
  margin-right: 20px;
  left: 0px;
  border-radius: 9px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  z-index: 999;
`;
