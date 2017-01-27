import 'whatwg-fetch';
import crypto from 'crypto';

const handleErrors = (response) => {
  if (response.status !== 200) {
    throw new Error(response.statusText);
  }
  return response;
};

const absoluteUri = (uri) => {
  const baseUrl = 'http://gateway.marvel.com:80';
  const stamp = Math.round(+new Date() / 1000);
  const publicKey = '298bab46381a6daaaee19aa5c8cafea5';
  const privateKey = 'b0223681fced28de0fe97e6b9cd091dd36a5b71d';
  const hash = crypto.createHash('md5').update(`${stamp}${privateKey}${publicKey}`).digest('hex');
  return `${baseUrl}${uri}?ts=${stamp}&apikey=${publicKey}&hash=${hash}`;
};

/* Used to simulate an error and check the catcher */
const maybeItWontWork = (uri) => {
  const isLucky = () => Math.floor(Math.random() * 5);
  return isLucky() ? uri : 'http://httpstat.us/500';
};

const requestJson = (endpoint) => {
  const params = { headers: { 'Content-Type': 'application/json' }, method: 'GET' };
  return fetch(maybeItWontWork(absoluteUri(endpoint)), params)
          .then(handleErrors)
          .then(data => data.json() || data)
          .then(data => data.data.results);
};

export default requestJson;
