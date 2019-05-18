import React, { Component } from 'react';
import { connect } from 'react-redux';
import injectSheet from 'react-jss';
import { fetchPhotos } from './actions';
import Photo from './Photo';
import styles from './styles';

class PhotoList extends Component {
  componentDidMount = () => {
    this.props.handleFetchPhotos('food');
  }

  renderPhoto = () => {
    const {photoList} = this.props;
    return photoList.map(photo => {
      return <Photo key={photo.id} photo={photo}/>
    })
  }
  render() {
    const {classes} = this.props;
    return(
      <div className={classes.root}>
      {this.renderPhoto()}
      </div>
    );
  }
};

const mapStateToProps = state => ({
  photoList: state.testReducers.photoList,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleFetchPhotos: (searchString) => dispatch(fetchPhotos(searchString)),
})

export default injectSheet(styles)(connect(mapStateToProps,mapDispatchToProps)(PhotoList));