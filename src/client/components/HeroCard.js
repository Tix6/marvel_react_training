import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { Card } from 'antd';

const Title = styled.h2`
  color: white;
  text-align: center;
  text-shadow: 1px 1px 1px black;
  cursor: pointer;
`;

const Link = styled.a`
  margin: 1em;
  text-shadow: 1px 1px 1px black;
`;

const Links = ({ urls }) =>
  <div>
    { urls.map((url, id) => <Link href={url.url} key={id}>{url.type}</Link>) }
  </div>;

Links.propTypes = {
  urls: PropTypes.array,
};

const cardStyle = bgUrl => ({
  width: '280px',
  height: '360px',
  margin: '1rem',
  border: '2px solid black',
  borderRadius: '2px',
  background: `url(${bgUrl})`,
  backgroundSize: 'cover',
});

const cardBodyStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '100%',
  alignItems: 'center',
};

const HeroCard = ({ hero, onClick }) =>
  <Card
    style={cardStyle(`${hero.thumbnail.path}.${hero.thumbnail.extension}`)}
    bodyStyle={cardBodyStyle}
  >
    <Title onClick={() => onClick(hero.id)}>{hero.name}</Title>
    <Links urls={hero.urls} />
  </Card>
;

HeroCard.propTypes = {
  hero: PropTypes.object,
  onClick: PropTypes.func.isRequired,
};

export default HeroCard;
