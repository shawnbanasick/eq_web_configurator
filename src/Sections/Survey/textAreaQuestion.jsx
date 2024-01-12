import React from "react";
import styled from "styled-components";
import { view } from "@risingstack/react-easy-state";
import textAreaImage from "../../assets/images/textAreaImage.png";

const TextAreaQuestion = () => {
  return <Image alt="text question (age)" src={textAreaImage} />;
};

export default view(TextAreaQuestion);

const Image = styled.img`
  width: 100%;
`;
