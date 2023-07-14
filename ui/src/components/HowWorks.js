import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '50px',
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
  cardContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '30px',
  },
  card: {
    maxWidth: '250px',
    margin: '0 30px',
  },
  cardMedia: {
    height: '250px',
  },
  cardContent: {
    textAlign: 'center',
  },
  cardBigText: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  cardSmallText: {
    fontSize: '16px',
  },
}));

const HowWorks = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <span className={classes.redText}>How it Works?</span>
      <span className={classes.blackText}>This is how our products work</span>
      <div className={classes.cardContainer}>
        <Card className={classes.card}>
          <CardMedia
            className={classes.cardMedia}
            component="img"
            image="/images/card2.png"
            style={{ imageResolution: '50%' }}
            alt="Card 1"
          />
          <CardContent className={classes.cardContent}>
            <Typography className={classes.cardBigText}>Find Property</Typography>
            <Typography className={classes.cardSmallText}>
              Small Text 1-1
              <br />
              Small Text 1-2
              <br />
              Small Text 1-3
            </Typography>
          </CardContent>
        </Card>
        <Card className={classes.card}>
          <CardMedia
            className={classes.cardMedia}
            component="img"
            image="/images/card2.png"
            alt="Card 2"
          />
          <CardContent className={classes.cardContent}>
            <Typography className={classes.cardBigText}>Plans</Typography>
            <Typography className={classes.cardSmallText}>
              Small Text 2-1
              <br />
              Small Text 2-2
              <br />
              Small Text 2-3
            </Typography>
          </CardContent>
        </Card>
        <Card className={classes.card}>
          <CardMedia
            className={classes.cardMedia}
            component="img"
            image="/images/card3.png"
            alt="Card 3"
          />
          <CardContent className={classes.cardContent}>
            <Typography className={classes.cardBigText}>Outcomes</Typography>
            <Typography className={classes.cardSmallText}>
              Small Text 3-1
              <br />
              Small Text 3-2
              <br />
              Small Text 3-3
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default HowWorks;
