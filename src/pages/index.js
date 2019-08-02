import React from 'react';

import {
  Header,
  Description,
  ListSection,
  Link
} from "@nathanstilwell/components";

import Layout from '../components/Layout';
import Avatar from '../components/Avatar';
import Bonus from '../components/Bonus';

const Index = () => (
  <Layout>
    <Avatar />

    <Header>Hi, I'm Nathan Stilwell</Header>

    <Description>
      I'm a software engineer who lives in New York City. I enjoy blending
      open source technologies together into savory web products. I write
      code at <Link href="https://www.cockroachlabs.com/" text="Cockroach Labs" />.
      I share my life with my partner and better half, <Link href="https://elizabethstilwell.com/" text="Elizabeth" />.
    </Description>

    <ListSection
      title="Slides"
      links={[{
        href: 'https://nathanstilwell.com/click-clack-code',
        text: 'Click, Clack, Code',
      }, {
        href: 'https://nathanstilwell.com/postcss-for-everyone',
        text: 'PostCSS is for Everyone',
      }, {
        href: 'https://nathanstilwell.com/whiskey-explained',
        text: 'Whiskey Explained',
      }]}
    />

    <ListSection
      title="Fun"
      links={[{
        href: 'https://github.com/nathanstilwell',
        text: 'github.com/nathanstilwell',
        logo: 'github',
      }, {
        href: 'https://codepen.io/nathanstilwell',
        text: 'codepen.io/nathanstilwell',
        logo: 'codepen',
      }]}
     />

    <ListSection
      title="Work"
      links={[{
        href: 'https://www.linkedin.com/in/nathanstilwell',
        text: 'linkedin.com/in/nathanstilwell',
        logo: 'linkedin'
      }]}
    />

    <Bonus />
  </Layout>
);

export default Index;
