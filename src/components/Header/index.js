import React from 'react';
import injectSheet from 'react-jss';
import SearchIcon from '@material-ui/icons/Search';
import styles from './styles';

const Header = ({classes}) => (
  <div className={classes.root}>
    <SearchIcon /> <span>Photo Finder</span>
  </div>  
);

export default injectSheet(styles)(Header);