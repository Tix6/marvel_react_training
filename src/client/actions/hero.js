export const SHOW_LIST = 'hero/showList';
export const SHOW_INFO = 'hero/showInfo';

export const showList = () => ({
  type: SHOW_LIST,
});

export const showInfo = id => ({
  type: SHOW_INFO,
  payload: id,
});

export default { showList, showInfo };
