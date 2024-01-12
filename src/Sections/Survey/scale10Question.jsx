import React from "react";
import styled from "styled-components";
import { view } from "@risingstack/react-easy-state";
import rating10Image from "../../assets/images/rating10Image.png";

const Scale10Question = () => {
  return <Image alt="text question (age)" src={rating10Image} />;
};

export default view(Scale10Question);

const Image = styled.img`
  width: 100%;
`;
