import React from 'react';
import injectSheet from 'react-jss';
import styles from './styles';

const Photo = ({photo, classes, handleViewDetails}) => (
  <div className={classes.root} onClick={() => handleViewDetails(photo.id)}>
    {photo 
      ? <img src={photo.urls ? photo.urls.small : photo.cover_photo.urls.small} title={photo.title}></img>
      : null
    }
  </div>
);

export default injectSheet(styles)(Photo);