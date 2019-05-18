import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPhotos } from '../Test/actions';

class Test extends Component {
  componentDidMount = () => {
    this.props.handleFetchPhotos('food');
  }
  render() {
    return(
      <div>
        Hello world!
      </div>
    );
  }
};

const mapStateToProps = state => ({
  // squaresData: state.squareReducers.squaresData,
  // isComplete: state.squareReducers.isComplete,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleFetchPhotos: (searchString) => dispatch(fetchPhotos(searchString)),
})

export default connect(mapStateToProps,mapDispatchToProps)(Test);