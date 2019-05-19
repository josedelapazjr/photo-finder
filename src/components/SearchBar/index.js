import React, {Component} from 'react';
import injectSheet from 'react-jss';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
// import Fab from '@material-ui/core/Fab';
// import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import styles from './styles';
import { fetchPhotos, fetchRandomPhoto } from '../PhotoList/actions';
import { getRandomPhoto } from './selectors';

class SearchBar extends Component {

  state = {
    searchString: '',
  }

  componentDidMount = () => {
    this.props.handleFetchRandomPhoto();
  }

  handleTextChange = (event) => {
    const {value} = event.target;
    console.log('handleTextChange:value ', value);
    this.setState({
      searchString: value, 
    });
  }
  handleSearchButton = () => {
    const {searchString} = this.state;
    const {handleFetchPhotos} = this.props;
    if(searchString.length > 0) {
      handleFetchPhotos(searchString);
      this.setState({
        searchString: '', 
      });
    }
  }

  handleOnKeyPress = (event) => {
    if (event.key === 'Enter') {
      this.handleSearchButton();
    }
  };

  render() {
    const { classes, backgroundPhoto } = this.props;
    const {searchString} = this.state;
    console.log('SearchBar:backgroundPhoto ', backgroundPhoto);
    return(
      <div className={classes.root}>
        <div>
          <h1>Sample App using Unsplash API</h1>
        </div>
        <div className={classes.search}>
          <TextField 
            label="Enter a keyword" 
            value={searchString}
            onChange={this.handleTextChange}
            className={classes.text}
            onKeyPress={this.handleOnKeyPress}
          /> 
          <IconButton onClick={this.handleSearchButton}>
            <SearchIcon />
          </IconButton>
        </div>  
        
      </div>
    );
  }
}

const mapStateToProps = state => ({
  backgroundPhoto: getRandomPhoto(state),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleFetchPhotos: (searchString) => dispatch(fetchPhotos(searchString)),
  handleFetchRandomPhoto: () => dispatch(fetchRandomPhoto()),
})

export default injectSheet(styles)(connect(mapStateToProps,mapDispatchToProps) (SearchBar));