export const defaultState = {
  photoList: [],
  selectedPhoto: null,
  isLoading: false,
}
export default function photoReducers(state=defaultState,action) {
    switch(action.type) {
        case 'FETCH_PHOTOS': {
          return {
            ...state,
            isLoading: true,
          }
        }
        case 'FETCH_PHOTOS_SUCCESS': {
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
          const selectedPhoto = state.photoList.find(photo => photo.id === action.payload);
          return {
            ...state,
            selectedPhoto: selectedPhoto,
          }
        }
        default:
            return state;
    };
}