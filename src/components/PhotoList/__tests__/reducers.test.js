import photoReducers, { defaultState } from '../reducers';

describe('Photo Reducers', () => {
  it('Should return the initial state when no action passed', () => {
    expect(photoReducers(undefined, {})).toEqual(defaultState);
  });

  it('should update state when fetch photo process has started', () => {
    const action = {
      type: 'FETCH_PHOTOS'
    };
    const expectedState = { ...defaultState, ...{isLoading: true}} 
    expect(photoReducers(defaultState, action)).toEqual(expectedState);
  });

  it('should update state when fetch photo process has completed', () => {
    const payload = [
      { id: 1, title: 'photo1' },
      { id: 2, title: 'photo2' },
    ];
    const action = {
      type: 'FETCH_PHOTOS_SUCCESS',
      payload: payload
    };
    const expectedState = { ...defaultState, ...{photoList: payload}};
    expect(photoReducers(defaultState, action)).toEqual(expectedState);
  });

  it('should update state when fetch photo process has completed', () => {
    const payload = [
      { id: 1, title: 'photo1' },
      { id: 2, title: 'photo2' },
    ];
    const action = {
      type: 'FETCH_PHOTOS_SUCCESS',
      payload: payload
    };
    const expectedState = { ...defaultState, ...{photoList: payload}};
    expect(photoReducers(defaultState, action)).toEqual(expectedState);
  });

  it('should update state when set selected photo has completed', () => {
    const action = {
      type: 'SET_SELECTED_PHOTO',
      payload: 1
    };
    const currentState = { 
      ...defaultState, 
      ...{ photoList: [
            { id: 1, title: 'photo1' },
            { id: 2, title: 'photo2' },
      ]}
    };
    const expectedState = { 
      ...currentState, 
      ...{ selectedPhoto: currentState.photoList.find(photo => photo.id === action.payload)}
    };
    expect(photoReducers(currentState, action)).toEqual(expectedState);
  });

});