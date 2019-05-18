import React from 'react';
import injectSheet from 'react-jss';
import styles from './styles';

const Photo = ({photo, classes}) => (
  <div className={classes.root}>
    {photo 
      ? <img src={photo.urls ? photo.urls.thumb : photo.cover_photo.urls.thumb} alt="Italian Trulli"></img>
      : null
    }
  </div>
);

export default injectSheet(styles)(Photo);