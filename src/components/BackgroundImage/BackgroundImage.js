import React from "react";
import styled from "styled-components";

import NathanLarge from "./img/nathan_3.png";
import NathanMedium from "./img/nathan_5.png";

const Section = styled.section`
  display: none;
  height: 100vh;
  position: fixed;
  width: 100vw;

  @media only screen and (min-width: 48rem) {
    background-image: url(${NathanMedium});
    background-color: transparent;
    background-repeat: no-repeat;
    background-position: bottom right;
    display: block;
  }

  @media only screen and (min-width: 80rem) {
    background-image: url(${NathanLarge});
    background-color: transparent;
    background-repeat: no-repeat;
    background-position: bottom right;
    display: block;
  }
`;

const BackgroundImage = ({ children }) => <Section />;

export default BackgroundImage;
