import React from "react";
import styled from "styled-components";
import { view } from "@risingstack/react-easy-state";
import rating5Image from "../../assets/images/rating5Image.png";

const Scale5Question = () => {
  return <Image alt="scale 5 question" src={rating5Image} />;
};

export default view(Scale5Question);

const Image = styled.img`
  width: 100%;
`;
