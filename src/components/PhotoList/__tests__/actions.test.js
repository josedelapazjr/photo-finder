import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  FETCH_PHOTOS, 
  FETCH_PHOTOS_SUCCESS, 
  FETCH_PHOTOS_ERROR, 
  SET_SELECTED_PHOTO
} from '../actionTypes';
import {fetchPhotos, fetchFeaturedPhotos } from '../actions';
import {getPhotos, getFeaturedPhotos} from '../../../api/v1'

const getActionTypes = (store) => store.getActions().map((prop) => prop.type);
jest.mock('../../../api/v1', () => ({
  getPhotos: jest.fn(),
  getFeaturedPhotos: jest.fn(),
}));


describe('Actions', () => {
  const mockStore = configureMockStore([thunk]);
  let store = mockStore({});

  describe('Fetch photos', () => {
    beforeEach(() => {
      store = mockStore({});
    });
    it('Dispatches expected actions when fetching photo', () => {
      getPhotos.mockImplementation(() => Promise.resolve({}));
      const expectedActions = [
        FETCH_PHOTOS,
        FETCH_PHOTOS_SUCCESS,
      ];
      return store
        .dispatch(fetchPhotos('testing'))
        .then(() => {
          const actualActions = getActionTypes(store);
          expect(actualActions).toEqual(expectedActions);
        })
    });  
    
    it('Dispatches expected actions when fetching featured photo', () => {
      getFeaturedPhotos.mockImplementation(() => Promise.resolve({}));
      const expectedActions = [
        FETCH_PHOTOS,
        FETCH_PHOTOS_SUCCESS,
      ];
      return store
        .dispatch(fetchFeaturedPhotos())
        .then(() => {
          const actualActions = getActionTypes(store);
          expect(actualActions).toEqual(expectedActions);
        })
    });    
    
  });
});