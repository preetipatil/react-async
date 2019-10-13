import { REQUEST_LOADED, REQUEST_LOADING, REQUEST_FAILED_TO_LOAD } from './action-types';

const MY_API_KEY = 'c39a26d9c12f48dba2a5c00e35684ecc';

export function fetchSuccess(data) {
  return {
    type: REQUEST_LOADED,
    data: data.articles,
  };
}

export function fetchRequest() {
  return {
    type: REQUEST_LOADING,
  };
}

export function fetchError(error) {
  return {
    type: REQUEST_FAILED_TO_LOAD,
    error: error,
  };
}

export function loadNews() {
  return function(dispatch) {
    dispatch(fetchRequest());
    return fetch(`https://newsapi.org/v1/articles?source=bbc-news&apiKey=${MY_API_KEY}`)
      .then(response => response.json())
      .then(json => dispatch(fetchSuccess(json)))
      .catch(error => dispatch(fetchError(error)));
  };
}
