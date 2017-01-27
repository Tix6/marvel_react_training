import requestJson from './utils';
import { addLoading, delLoading } from './loading';

export const LIST_LOADED = 'list/listLoaded';

export const listLoaded = list => ({
  type: LIST_LOADED,
  payload: list,
});

export const loadList = () => (dispatch) => {
  const endpoint = '/v1/public/characters';
  dispatch(addLoading());
  requestJson(endpoint, dispatch)
    .then((list) => {
      dispatch(delLoading());
      dispatch(listLoaded(list));
      return list;
    })
    .catch((error) => {
      dispatch(delLoading());
      console.log(error);
    });
};

export default { loadList };
