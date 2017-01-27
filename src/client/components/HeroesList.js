import React, { PropTypes } from 'react';
import styled from 'styled-components';
import HeroCard from './HeroCard';

const Section = styled.section`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;

const Title = styled.h1`
  text-align: center;
  margin: 1em 0 1em 0;
`;

const HeroesList = ({ list, onClick }) =>
  <div>
    <Title>Liste des super héros :</Title>
    <Section>
      {list.map(hero => <HeroCard hero={hero} onClick={onClick} key={hero.id} />)}
    </Section>
  </div>
;

HeroesList.propTypes = {
  list: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default HeroesList;
