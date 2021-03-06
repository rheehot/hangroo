import React, {useEffect} from 'react';
import styled from 'styled-components';

import PeopleCard from 'components/PeopleCard';
import PeopleData from 'assets/PeopleData';

const MainContainer = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;

  padding: 7rem 5rem;

  @media only screen and (max-width: 1000px) {
    padding: 7rem 0;
  }

  @media only screen and (max-width: 400px) {
    padding: 5rem 0;
  }
`;

const CardContainer = styled.div`
  margin: 1rem;
  align-self: stretch;
`;

export default function PeoplePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <MainContainer>
      {PeopleData.map(props =>
        (
          <CardContainer key={props.name}>
            <PeopleCard {...props} />
          </CardContainer>
        ))}
    </MainContainer>
  );
}
