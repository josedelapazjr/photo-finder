import React, { Component } from 'react';
import { connect } from 'react-redux';
import injectSheet from 'react-jss';
import { fetchFeaturedPhotos, setSelectedPhoto } from './actions';
import { getPhotoList, getSelectedPhoto } from './selectors';
import Photo from './Photo';
import PhotoDetails from './PhotoDetails';
import styles from './styles';

class PhotoList extends Component {
  state = {
    showPhotoDetails: false,
  }

  handleOpenPhotoDetails = (photoId) => {
    this.setState({
      showPhotoDetails: true,  
    })
    this.props.handleSetSelectedPhoto(photoId);
  }

  handleClosePhotoDetails = () => {
    this.setState({
      showPhotoDetails: false,  
    })
  }


  componentDidMount = () => {
    this.props.handleFetchFeaturedPhotos();
  }

  renderPhoto = () => {
    const {photoList} = this.props;
    return photoList.map(photo => {
      return <Photo key={photo.id} photo={photo} handleViewDetails={this.handleOpenPhotoDetails}/>
    })
  }
  render() {
    const {classes, selectedPhoto} = this.props;
    const {showPhotoDetails} = this.state;
    console.log('PhotoList:selectedPhoto ', selectedPhoto);
    return(
      <div className={classes.root}>
      {this.renderPhoto()}
      <PhotoDetails 
        isOpen={showPhotoDetails} 
        handleClose={this.handleClosePhotoDetails}
        photo={selectedPhoto}
      />
      </div>
    );
  }
};

const mapStateToProps = state => ({
  photoList: getPhotoList(state),
  selectedPhoto: getSelectedPhoto(state),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleFetchFeaturedPhotos: () => dispatch(fetchFeaturedPhotos()),
  handleSetSelectedPhoto: (photoId) => dispatch(setSelectedPhoto(photoId)),
})

export default injectSheet(styles)(connect(mapStateToProps,mapDispatchToProps)(PhotoList));