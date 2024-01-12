import React from "react";
import styled from "styled-components";
import { view } from "@risingstack/react-easy-state";
import selectImage from "../../assets/images/selectImage.png";

const SelectQuestion = () => {
  return <Image alt="text question (age)" src={selectImage} />;
};

export default view(SelectQuestion);

const Image = styled.img`
  width: 100%;
`;
