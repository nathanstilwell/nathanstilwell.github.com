import React from 'react';
import styled from 'styled-components';

import FillSpan from './FillSpan';

const DescriptionParagraph = styled.p`
  font-size: 1rem;
  padding: 0 2rem;
  margin: 2rem 0 0 0;
  width: 83.33333%;

  @media only screen and (min-width: 48rem) {
    font-size: 1.5rem;
  }

  @media only screen and (min-width: 100rem) {
    font-size: 2rem;
  }
`;

const Description = ({ children }) => (
  <DescriptionParagraph>
    <FillSpan>{children}</FillSpan>
  </DescriptionParagraph>
);

export default Description;
