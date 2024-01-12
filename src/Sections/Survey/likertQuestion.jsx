import React from "react";
import styled from "styled-components";
import { view } from "@risingstack/react-easy-state";
import likertImage from "../../assets/images/likertImage.png";

const LikertQuestion = () => {
  return <Image alt="text question (age)" src={likertImage} />;
};

export default view(LikertQuestion);

const Image = styled.img`
  width: 100%;
`;
