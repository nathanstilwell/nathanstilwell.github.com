import React from 'react';
import styled from 'styled-components';

import FillSpan from './FillSpan';
import Link from './Link';

const Section = styled.section`
  padding: 0 2rem;
  margin: 2rem 0 0 0;
`;
const SectionTitle = styled.h2`
  font-size: 1.5rem;
`;
const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;
const ListItem = styled.li`
  padding: .5rem 0;
`;
const Img = styled.img`
  margin: 0 0.5rem 0 0;
  vertical-align: middle;
`;

const ListSection = ({ title, links }) => (
  <Section>
    <SectionTitle>
      <FillSpan>{title}</FillSpan>
    </SectionTitle>
    <List>
      {links.map((link, index) => (
        <ListItem key={index}>
          {link.logo && (
            <Img
              src={`https://icon.now.sh/${link.logo}/24`}
              alt={`${link.logo} icon`}/>
          )}
          <FillSpan>
            <Link href={link.href} text={link.text} />
          </FillSpan>
        </ListItem>
      ))}
    </List>
  </Section>
);

ListSection.defaultProps = {
  title: '',
  links: [],
}

export default ListSection;
