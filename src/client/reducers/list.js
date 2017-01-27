import { LIST_LOADED } from '../actions/list';

const list = (state = [], action = {}) => {
  switch (action.type) {
    case LIST_LOADED:
      return action.payload;
    default:
      return state;
  }
};

export default list;
