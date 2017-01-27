import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';
import actionsList from '../actions/';
import HeroesList from './HeroesList';
import HeroInfo from './HeroInfo';

const Wrapper = styled.section`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;

const App = ({ list, infos, hero, actions }) =>
  <Wrapper>
    {
      hero !== 0 ?
        <HeroInfo info={infos[hero]} onClick={actions.showList} /> :
        <HeroesList list={list} onClick={actions.loadInfo} />
    }
  </Wrapper>;

App.propTypes = {
  list: PropTypes.array,
  infos: PropTypes.object,
  hero: PropTypes.number,
  actions: PropTypes.object.isRequired,
};

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(actionsList, dispatch) });

export default connect(mapStateToProps, mapDispatchToProps)(App);
