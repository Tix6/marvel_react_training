import R from 'ramda';
import requestJson from './utils';
import { addLoading, delLoading } from './loading';

export const INFO_LOADED = 'info/infoLoaded';

const infoLoaded = hero => ({
  type: INFO_LOADED,
  payload: hero,
});

export const loadInfo = id => (dispatch, getState) => {
  const { infos } = getState();
  if (infos[id]) {
    console.log(`hero ${id} already fetched`);
    dispatch(infoLoaded(infos[id]));
  } else {
    const endpoint = `/v1/public/characters/${id}`;
    dispatch(addLoading());
    requestJson(endpoint, dispatch)
      .then((info) => {
        dispatch(delLoading());
        dispatch(infoLoaded(R.prop(0)(info)));
        return info;
      })
      .catch((error) => {
        dispatch(delLoading());
        console.log(error);
      });
  }
};

export default { loadInfo };
