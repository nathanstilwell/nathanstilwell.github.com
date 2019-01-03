import React from 'react';
import styled from 'styled-components';

import BackgroundImage from './BackgroundImage';

const Main = styled.main`
  font-family: 'Inconsolata', sans-serif;
  margin: 2rem auto 0;
  padding: 0;
  position: relative;
`;

const Layout = ({ children }) => (
  <section>
    <BackgroundImage />
    <Main>{children}</Main>
  </section>
);

export default Layout;
