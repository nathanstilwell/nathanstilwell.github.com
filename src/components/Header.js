import React from 'react';
import styled from 'styled-components';

import FillSpan from './FillSpan';

const Title = styled.h1`
  margin: 2rem 0 0 0;
  padding: 0 2rem;

  font-size: 1.5rem;
  text-align: center;

  @media only screen and (min-width : 30rem) {
    font-size: 2rem;
    text-align: center;
  }
  @media only screen and (min-width: 48rem) {
    font-size: 3rem;
    text-align: left;
  }
  @media only screen and (min-width: 60rem) {
    font-size: 4.8rem;
    text-align: left;
  }
  @media only screen and (min-width: 80rem) {
    font-size: 6rem;
    text-align: left;
  }
  @media only screen and (min-width: 100rem) {
    font-size: 8rem;
    text-align: left;
  }
  @media only screen and (min-width: 120rem) {
    font-size: 10rem;
    text-align: left;
  }
  @media only screen and (min-width: 150rem) {
    font-size: 12rem;
    text-align: left;
  }
`;

const Header = ({ children }) => (
  <header>
    <Title>
      <FillSpan>{children}</FillSpan>
    </Title>
  </header>
);

export default Header;
