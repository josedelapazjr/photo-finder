import React, {Component} from 'react';
import injectSheet from 'react-jss';
import TextField from '@material-ui/core/TextField';
import styles from './styles';

class SearchBar extends Component {
  render() {
    const { classes } = this.props;
    return(
      <div>
        <TextField label="Search"/>
      </div>
    );
  }
}

export default injectSheet(styles)(SearchBar);