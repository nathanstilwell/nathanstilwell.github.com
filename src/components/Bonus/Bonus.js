import React from "react";
import styled from "styled-components";

import image from "./img/nathan_2.png";

const BonusFigure = styled.figure`
  line-height: 0.5;
  margin: 2rem 0 0 0;
  width: 100%;

  @media only screen and (min-width: 48rem) {
    display: none;
  }
`;

const BonusImage = styled.img`
  border: 0;
  max-width: 100%;
  margin: 0;
  padding: 0;
`;

const Bonus = () => (
  <BonusFigure>
    <BonusImage src={image} />
  </BonusFigure>
);

export default Bonus;
