import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPhotos } from './actions';
// import PhotoList from './PhotoList';

class PhotoList extends Component {
  componentDidMount = () => {
    this.props.handleFetchPhotos('food');
  }

  renderPhoto = () => {
    const {photoList} = this.props;
    return photoList.map(photo => {
      return <div>
        <img src={photo.urls.thumb} alt="Italian Trulli"></img>
      </div>
    })
  }
  render() {
    return(
      <div>
      {this.renderPhoto()}
      </div>
    );
  }
};

const mapStateToProps = state => ({
  // squaresData: state.squareReducers.squaresData,
  // isComplete: state.squareReducers.isComplete,
  photoList: state.testReducers.photoList,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleFetchPhotos: (searchString) => dispatch(fetchPhotos(searchString)),
})

export default connect(mapStateToProps,mapDispatchToProps)(PhotoList);