import React from 'react';
import PhotoList from '../PhotoList';
import SearchBar from '../SearchBar';

const PhotoSearch = () => (
  <div>
    Welcome to Photo Search !
      <SearchBar />
      <PhotoList />
  </div>
);

export default PhotoSearch;