import React from 'react';
import styled from 'styled-components';

const Span = styled.span`
  background-color: ${props => props.bgColor || 'white'};
`;

const FillSpan = ({ children, bgColor }) => (
  <Span bgColor={bgColor}>{children}</Span>
);

export default FillSpan;
