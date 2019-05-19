import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

const PhotoDetails = ({ photo, isOpen, handleClose }) => (
  <Dialog
    open={isOpen}
    // onClose={handleClose}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
    // fullScreen
    // fullWidth
  >
    <DialogTitle>{photo ? photo.title : 'Photo Details'}</DialogTitle>
    <DialogContent>
      {photo 
        ? <img src={photo.urls ? photo.urls.small : photo.cover_photo.urls.small}></img>
        : null
      }
    </DialogContent>
    <DialogActions>
      <Button color="primary" onClick={handleClose}>
        Close
      </Button>
    </DialogActions>
  </Dialog>
);

export default PhotoDetails;