import React from 'react';
import ReactDom from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import rootReducer from './reducers/';
import { loadList } from './actions/list';
import App from './components/App';

const initialState = {
  list: [],
  infos: {},
  hero: 0,
  loading: 0,
};

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(thunk, createLogger()),
);

store.dispatch(loadList());

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
