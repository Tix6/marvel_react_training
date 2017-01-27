import { SHOW_LIST } from '../actions/hero';
import { INFO_LOADED } from '../actions/infos';

const hero = (state = 0, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case SHOW_LIST:
      return 0;
    case INFO_LOADED:
      return payload.id;
    default:
      return state;
  }
};

export default hero;
