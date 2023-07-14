import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useLocation } from 'react-router-dom';
import Header from "./Header";
import NewListPropertyCard from './NewListPropertyCard';
import CardList from './CardList';
import SearchTop from './SearchTop';

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
        <SearchTop></SearchTop>
        <CardList></CardList>
      </div>
    </div>
  );
};

export default SearchPage;
