import React from 'react';
import styled from 'styled-components';
import avatar from './img/nathan_1.jpg';

const AvatarFigure = styled.figure`
  line-height: 0.5;
  overflow: hidden;
  margin: 2rem auto 0;
  max-width: 200px;
`;

const AvatarImage = styled.img`
  border: 0;
  border-radius: 100px;
  max-width: 100%;

  @media only screen and (min-width: 48rem) {
    display: none;
  }
`;

const Avatar = () => (
  <AvatarFigure>
    <AvatarImage src={avatar} />
  </AvatarFigure>
);

export default Avatar;
