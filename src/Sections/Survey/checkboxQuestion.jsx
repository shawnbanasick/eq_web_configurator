import React from "react";
import styled from "styled-components";
import { view } from "@risingstack/react-easy-state";
import checkboxImage from "../../assets/images/checkboxImage.png";

const CheckboxQuestion = () => {
  return <Image alt="text question (age)" src={checkboxImage} />;
};

export default view(CheckboxQuestion);

const Image = styled.img`
  width: 100%;
`;
