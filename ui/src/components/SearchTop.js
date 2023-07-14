import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, ButtonGroup, TextField, IconButton } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles(() => ({
  searchContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '20px',
  },
  buttonGroup: {
    '& .MuiButtonBase-root': {
      borderRadius: '7px',
      marginRight: '10px',
    },
  },
  textField: {
    width: '300px',
    height: '50px',
  },
}));

const SearchTop = () => {
  const classes = useStyles();

  return (
    <div className={classes.searchContainer}>
      <ButtonGroup className={classes.buttonGroup}>
        <Button variant="contained" color="white" startIcon={<LocationOnIcon />}>
          Bangalore
        </Button>
        <Button variant="contained" color="white" startIcon={<HomeIcon />}>
          Apartment
        </Button>
      </ButtonGroup>
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
  );
};

export default SearchTop;
    