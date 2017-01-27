import { combineReducers } from 'redux';
import list from './list';
import infos from './infos';
import hero from './hero';
import loading from './loading';

const rootReducer = combineReducers({
  list,
  infos,
  hero,
  loading,
});

export default rootReducer;
