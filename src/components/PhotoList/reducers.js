const defaultSate = {
  photoList: [],
  isLoading: false,
}
export default function testReducers(state=defaultSate,action) {
    console.log('testReducers');
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
        default:
            return state;
    };
}