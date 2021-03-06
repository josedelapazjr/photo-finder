import React from 'react';
import { compose } from 'redux';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import ThumbUp from '@material-ui/icons/ThumbUp';
import Room from '@material-ui/icons/Room';
import withWidth from '@material-ui/core/withWidth';
import injectSheet from 'react-jss';
import styles from './styles';

const PhotoDetails = ({ photo, isOpen, handleClose, isMobile, classes }) => (
  <Dialog
    open={isOpen}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
    fullScreen={isMobile}
    fullWidth={isMobile}
  >
    <DialogTitle>{photo.title ? photo.title : photo.alt_description}</DialogTitle>
    <DialogContent className={classes.dialogContent}>
      <img src={photo.urls ? photo.urls.small : photo.cover_photo.urls.small}></img>
      <div className={classes.root}>
        <div className={classes.detail}>
          <img src={photo.user.profile_image ? photo.user.profile_image.small : null}></img>
          <span className={classes.label}>{photo.user.name}</span>
        </div>
        {photo.likes 
          ? <div className={classes.detail}>
              <ThumbUp />
              <span className={classes.label}>{photo.likes}</span>
            </div>  
          : null
        }
        {photo.user.location 
          ? <div className={classes.detail}>
              <Room />
              <span className={classes.label}>{photo.user.location}</span>
            </div>
          : null   
        }
      </div>
    </DialogContent>
    <DialogActions>
      <Button fullWidth variant="contained" color="primary" onClick={handleClose}>
        Close
      </Button>
    </DialogActions>
  </Dialog>
);

export default compose(
  withWidth(),
  injectSheet(styles),
)(PhotoDetails);