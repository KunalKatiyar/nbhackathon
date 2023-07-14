import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: "50px"
  },
  redText: {
    color: '#FA3A57',
    fontSize: '34px',
    fontWeight: 'bold',
  },
  blackText: {
    color: 'black',
    fontSize: '18px',
  },
}));

const HowWorks = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <span className={classes.redText}>How it Works?</span>
      <span className={classes.blackText}>This is how our products works</span>
    </div>
  );
};

export default HowWorks;
