import apiV1 from '../../api/v1';
import {
  FETCH_PHOTOS, 
  FETCH_PHOTOS_SUCCESS, 
  FETCH_PHOTOS_ERROR, 
  SET_SELECTED_PHOTO
} from './actionTypes';

export const fetchPhotos = (searchString) => (dispatch) => {
  dispatch({type: FETCH_PHOTOS});
  return apiV1.getPhotos(searchString)
    .then(data => {
      dispatch(fetchPhotosSuccess(data.results));
    })
    .catch((e) => {
      dispatch(fetchPhotosError());
    });
};


export const fetchFeaturedPhotos = () => (dispatch) => {
  dispatch({type: FETCH_PHOTOS});
  return apiV1.getFeaturedPhotos()
    .then(data => {
      dispatch(fetchPhotosSuccess(data));
    })
    .catch((e) => {
      dispatch(fetchPhotosError());
    });
};

export const fetchPhotosSuccess = (data) => ({
  type: FETCH_PHOTOS_SUCCESS,
  payload: data
});

export const fetchPhotosError = () => ({
  type: FETCH_PHOTOS_ERROR
});

export const setSelectedPhoto = (photoId) => ({
  type: SET_SELECTED_PHOTO,
  payload: photoId
});
