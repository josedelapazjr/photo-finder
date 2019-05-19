const defaultSate = {
  photoList: [],
  selectedPhoto: null,
  isLoading: false,
}
export default function testReducers(state=defaultSate,action) {
    console.log('testReducers:action: ', action);
    switch(action.type) {
        case 'FETCH_PHOTOS': {
          return {
            ...state,
            isLoading: true,
          }
        }
        case 'FETCH_PHOTOS_SUCCESS': {
          console.log('FETCH_PHOTOS_SUCCESS: ', action);
          return {
            ...state,
            photoList: action.payload,
            isLoading: false,
          }
        }
        case 'FETCH_PHOTOS_ERROR': {
          return {
            ...state,
            isLoading: false,
          }
        }
        case 'SET_SELECTED_PHOTO': {
          const selectedPhoto = state.photoList.find(photo => photo.id == action.payload);
          return {
            ...state,
            selectedPhoto: selectedPhoto,
          }
        }
        case 'SET_RANDOM_PHOTO': {
          return {
            ...state,
            randomPhoto: action.payload,
          }
        }
        default:
            return state;
    };
}