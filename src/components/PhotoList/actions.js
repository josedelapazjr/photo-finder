// import api from '../api/v1';
// import APIUtility from '../api/v1';
// export const fetchPhotos = (searchString) => (dispatch) => {
//   console.log('calling action fetchPhotos!');
//   console.log('api: ', api);
//   return api.searchPhotos(searchString)
//     .then(response => response.json())
//     .then(data => {
//       console.log('data: ', data.result);
//       // dispatch success
//     })
//     .catch((e) => {
//       // dispatch error
//     });
// };


import queryString from 'query-string';
import { getHeaders } from '../../api/header'; 
import {HTTPMethod} from '../../api/ApiCore';
export const fetchPhotos = (searchString) => (dispatch) => {
  const URL = 'https://api.unsplash.com';
  const query = queryString.stringify({
    query: searchString,
    page: 1,
  });
  const apiURL = `${URL}/search/photos?${query}`;
  return fetch(apiURL , {
      method: HTTPMethod.GET,
      headers: getHeaders()
    })
    .then(response => response.json())
    .then(data => {
      console.log('result: ', data.results);
      dispatch(fetchPhotosSuccess(data.results));
      // dispatch success
    })
    .catch((e) => {
      // dispatch error
    });
};

export const fetchPhotosSuccess = (data) => ({
  type: 'FETCH_PHOTOS_SUCCESS',
  payload: data
});