import { INFO_LOADED } from '../actions/infos';

const infos = (state = [], action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case INFO_LOADED:
      return (state[payload.id]) ? state : { ...state, [payload.id]: payload };
    default:
      return state;
  }
};

export default infos;
