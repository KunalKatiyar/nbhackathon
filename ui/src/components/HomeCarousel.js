import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    alignItems: 'stretch',
    justifyContent: 'space-around',    
    fontFamily: 'Inter, sans-serif',
    paddingLeft: "125px",
    paddingRight: "125px",
    paddingTop: "50px",
    paddingBottom: "60px",
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    paddingTop: '-50px',
    paddingRight: "150px"
  },
  redText: {
    color: '#FA3A57',
    fontSize: '48px',
    textAlign: 'left',
    paddingBottom: '20px',
  },
  blackText: {
    color: 'black',
    fontSize: '24px',
    textAlign: 'left',
  },
  buttonContainer: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: "25px"
  },
  redButton: {
    backgroundColor: '#FA3A57',
    color: 'white',
    marginRight: '10px',
    borderRadius: '5px',
    paddingTop: "10px",
    fontWeight: 'bold',
  },
  image: {
    width: '70%',
    height: 'auto',
  },
}));

const HomeCarousel = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.textContainer}>
        <div className={classes.redText}>Helping you find the best properties to invest</div>
        <div className={classes.blackText}>We can help you decide the best investment to maximize your returns!</div>
        <div className={classes.buttonContainer}>
          <Button variant="contained" className={classes.redButton}>
            Learn More
          </Button>
        </div>
      </div>
      <img
        src="/images/homecarousel.png"
        alt="homecarousel"
        className={classes.image}
      />
    </div>
  );
};

export default HomeCarousel;