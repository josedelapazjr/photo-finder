export const getPhotoList = (state) => {
  return state.photoReducers.photoList;
};

export const getSelectedPhoto = (state) => {
  return state.photoReducers.selectedPhoto;
};