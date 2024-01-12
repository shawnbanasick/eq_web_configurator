import React from "react";
import styled from "styled-components";
import { view } from "@risingstack/react-easy-state";
import radioImage from "../../assets/images/radioImage.png";

const radioQuestion = () => {
  return <Image alt="radio question" src={radioImage} />;
};

export default view(radioQuestion);

const Image = styled.img`
  width: 100%;
`;
