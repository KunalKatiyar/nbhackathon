import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useLocation } from 'react-router-dom';
import Header from "./Header";
import NewListPropertyCard from './NewListPropertyCard';
import { TextField } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import MyCardList from './MyCardList';

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '50px',
    backgroundColor: '#D3D3D3',
  },
  redText: {
    color: 'red',
    fontSize: '34px',
    fontWeight: 'bold',
  },
  blackText: {
    color: 'black',
    fontSize: '18px',
  },
  textField: {
    width: '600px',
    height: '50px',
  },
  searchContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '20px',
  },
}));

const SearchPage = () => {
  const classes = useStyles();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const value1 = queryParams.get('value1');
  const value2 = queryParams.get('value2');
  const value3 = queryParams.get('value3');

  return (
    <div>
      <Header></Header>
      <div  className={classes.container}>
      <div className={classes.searchContainer}>
      <TextField
        className={classes.textField}
        variant="outlined"
        placeholder="Search"
        InputProps={{
          endAdornment: (
            <IconButton edge="start">
              <SearchIcon />
            </IconButton>
          ),
        }}
      />
    </div>
        <MyCardList></MyCardList>
      </div>
    </div>
  );
};

export default SearchPage;
