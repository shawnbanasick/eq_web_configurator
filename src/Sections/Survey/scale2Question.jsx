import React from "react";
import styled from "styled-components";
import { view } from "@risingstack/react-easy-state";
import rating2Image from "../../assets/images/rating2Image.png";

const scale2Question = () => {
  return <Image alt="scale 2 question" src={rating2Image} />;
};

export default view(scale2Question);

const Image = styled.img`
  width: 100%;
`;
