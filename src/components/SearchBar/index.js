import React, {Component} from 'react';
import injectSheet from 'react-jss';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
// import Fab from '@material-ui/core/Fab';
// import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import styles from './styles';
import { fetchPhotos } from '../PhotoList/actions';

class SearchBar extends Component {

  state = {
    searchString: '',
  }

  handleTextChange = (event) => {
    const {value} = event.target;
    console.log('handleTextChange:value ', value);
    this.setState({
      searchString: value, 
    });
  }
  handleButton = () => {
    const {searchString} = this.state;
    const {handleFetchPhotos} = this.props;
    handleFetchPhotos(searchString);
    this.setState({
      searchString: '', 
    });
  }
  render() {
    const { classes } = this.props;
    const {searchString} = this.state;
    return(
      <div className={classes.root}>
        <TextField 
          label="Search" 
          value={searchString}
          onChange={this.handleTextChange}
        /> 
        <Button 
          variant="outlined" 
          onClick={this.handleButton}
          >
          Search
        </Button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleFetchPhotos: (searchString) => dispatch(fetchPhotos(searchString)),
})

export default injectSheet(styles)(connect(null,mapDispatchToProps) (SearchBar));