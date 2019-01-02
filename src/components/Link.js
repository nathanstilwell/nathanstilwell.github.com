import React from 'react';
import styled from 'styled-components';

const Anchor = styled.a`
  color: #0074d9;
  text-decoration: none;
`;

const Link = ({ href, text }) => (
  <Anchor href={href}>{text}</Anchor>
);

export default Link;
