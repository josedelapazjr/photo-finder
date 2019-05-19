import React, { Component } from 'react';
import { connect } from 'react-redux';
import injectSheet from 'react-jss';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import withWidth, { isWidthUp} from '@material-ui/core/withWidth';
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

  renderPhoto = (isMobile) => {
    const {photoList} = this.props;
    return photoList.map(photo => {
      return(
        <GridListTile >
          <Photo key={photo.id} photo={photo} handleViewDetails={this.handleOpenPhotoDetails}/>
        </GridListTile>  
      ); 
    })
  }
  render() {
    const {classes, selectedPhoto, width} = this.props;
    const {showPhotoDetails} = this.state;
    const isMobile = !isWidthUp('sm', width);
    return(
      <div className={classes.root}>
        <div className={classes.title}>Available photos</div>
        <GridList cellHeight={240} className={classes.gridList} cols={isMobile ? 1 : 5}>
          {this.renderPhoto(isMobile)}
        </GridList>
        {selectedPhoto ?
          <PhotoDetails 
          isOpen={showPhotoDetails} 
          handleClose={this.handleClosePhotoDetails}
          photo={selectedPhoto}
          isMobile={isMobile}
        />
        : null }
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

export default withWidth()(injectSheet(styles)(connect(mapStateToProps,mapDispatchToProps)(PhotoList)));