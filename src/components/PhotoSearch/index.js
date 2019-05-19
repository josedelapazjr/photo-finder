import React from 'react';
import PhotoList from '../PhotoList';
import SearchBar from '../SearchBar';
import Header from '../Header';

const PhotoSearch = () => (
  <div>
    <Header />
    <SearchBar />
    <PhotoList />
  </div>
);

export default PhotoSearch;