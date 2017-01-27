import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { Button } from 'antd';

const Wrapper = styled.section`
  display: flex;
  width: 80%;
  flex-flow: row wrap;
  justify-content: center;
  align-items: top;
  margin-top: 2em;
`;

const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px 5px 10px;
  margin-bottom: 1em;
  background-color: #ccc;
  border: 1px solid black;
  border-radius: 2px;
`;

const Left = styled.section`
  display: flex;
  flex: 1;
  margin-right: 2em;
  min-height: 500px;
`;

const Right = styled.section`
  display: flex;
  flex-direction: column;
  flex: 3;
`;

const Info = styled.li`
  color: #108ee9;
  border-top: 1px solid gray;
`;

const List = styled.div`
  border-bottom: 1px solid gray;
  margin-bottom: 1em;
`;

const InfoList = ({ title, infos }) =>
  <List>
    <h3>{title}</h3>
    <ul>
      { infos.map((info, id) => <Info key={id}>{info.name}</Info>) }
    </ul>
  </List>;

InfoList.propTypes = {
  title: PropTypes.string.isRequired,
  infos: PropTypes.array,
};

const HeroInfo = ({ info, onClick }) =>
  <Wrapper>
    <Left
      style={{
        background: `url(${info.thumbnail.path}.${info.thumbnail.extension})`,
        backgroundSize: 'cover',
      }}
    />
    <Right>
      <Header>
        <h1>{info.name}</h1>
        <Button icon="close" size="small" onClick={onClick} />
      </Header>
      <p>{info.description}</p>
      <InfoList title="Comics" infos={info.comics.items} />
      <InfoList title="Series" infos={info.series.items} />
    </Right>
  </Wrapper>;

HeroInfo.propTypes = {
  info: PropTypes.object,
  onClick: PropTypes.func.isRequired,
};

export default HeroInfo;
