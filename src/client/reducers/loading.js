import { ADD_LOADING, DEL_LOADING } from '../actions/loading';

const loading = (state = 0, action = {}) => {
  switch (action.type) {
    case ADD_LOADING:
      return state + 1;
    case DEL_LOADING:
      return state - 1;
    default:
      return state;
  }
};

export default loading;
