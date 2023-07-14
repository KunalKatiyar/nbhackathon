import {React, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, CardMedia, Typography, Button, Icon } from '@material-ui/core';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Alert, AlertTitle } from '@mui/material';

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  container2: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 'fit-content',
    backgroundColor: 'white',
    gap: '10px',
  },
  cardList: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '20px',
    marginBottom: '30px',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '1200px',
    width: '600px',
    borderRadius: '10px',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
  },
  cardContent: {
    display: 'flex',
    paddingBottom: '20px',
    marginTop: '20px',
  },
  cardTop: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '10px',
    marginBottom: '0px',
  },
  cardTitle: {
    fontSize: '20px',
    fontWeight: 'bold',
  },
  cardSubtitle: {
    fontSize: '16px',
    color: '#888',
    paddingTop: '5px',
  },
  cardImage: {
    width: '500px', // Decreased size of the image
    maxHeight: '400px', // Decreased size of the image
    objectFit: 'cover',
    borderRadius: '10px 10px 10px 10px',
    paddingLeft: '80px',
    marginBottom: '20px',
  },
  svg: {
    marginLeft: '17px',
  },
  svg2: {
    marginLeft: '17px',
    marginRight: '17px',
    marginBottom: "20px"
  },
  smallCardContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridTemplateRows: 'repeat(2, 1fr)',
    gap: '10px',
    paddingLeft: '30px',
    backgroundColor: 'white',
    borderRadius: '10px 10px 10px 10px',
  },
  smallCard: {
    display: 'block',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start', // Align text to the left
    height: '100%',
    width: '170px',
  },
  smallCardText: {
    fontSize: '14px',
    fontWeight: 'bold',
    color: 'black',
    margin: '5px',
    textAlign: 'left', // Align text to the left
  },
  smallsmallCardText: {
    fontSize: '12px',
    fontWeight: 'bold',
    color: 'grey',
    margin: '5px',
    textAlign: 'left', // Align text to the left
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '14px',
  },
  buttonContainer2: {
    display: 'block',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '14px',
    paddingTop: '25px',
    paddingRight: "40px"
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '80px',
  },
  redText: {
    color: '#FA3A57',
    fontSize: '10px',
    display: 'flex',
    alignItems: 'center',
  },
  blackText: {
    color: 'black',
    fontSize: '10px',
    marginTop: '5px',
    paddingRight: '30px',
  },
  largeButton: {
    backgroundColor: 'white',
    color: '#FA3A57',
    borderRadius: '5px',
    padding: '10px 20px',
    fontWeight: 'bold',
    fontSize: '14px',
  },
  smallButton: {
    backgroundColor: 'white',
    color: '#FA3A57',
    borderRadius: '5px',
    padding: '5px 10px',
    fontWeight: 'bold',
    fontSize: '14px',
  },
}));

const MyCardList = () => {
  const classes = useStyles();

  const [showAlert, setShowAlert] = useState(false);

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  // Example JSON array of card details
  const cardDetails = [
    {
      id: 1,
      title: '3 BHK Apartments, Marathalli, Bangalore, Karnataka',
      subtitle: '3 BHK Apartments, Marathalli, Bangalore, Karnataka',
      image: '/images/property.png',
      smallCards: [
        { option: 'Option 1', description: 'Descripti' },
        { option: 'Option 2', description: 'Descripti' },
        { option: 'Option 3', description: 'Descripti' },
        { option: 'Option 4', description: 'Descripti' },
      ],
    },
    {
      id: 2,
      title: 'Card 1',
      subtitle: 'Subtitle 1',
      image: '/images/card2.png',
      smallCards: [
        { option: 'Option 1', description: 'Descripti' },
        { option: 'Option 2', description: 'Descripti' },
        { option: 'Option 3', description: 'Descripti' },
        { option: 'Option 4', description: 'Descripti' },
      ],
    },
    // Add more card details objects here
  ];

  //Create an array of states for each card
    const [cardStates, setCardStates] = useState(
        cardDetails.map((card) => {
            return {
                id: card.id,
                selected: false,
            };
        })
    );

    // Function to handle the click event on the small cards
    const handleSmallCardClick = (cardId) => {
        console.log(cardId);
        // Create a copy of the cardStates array
        const newCardStates = [...cardStates];
        // Toggle the selected state of the card
        newCardStates[cardId].selected = !newCardStates[cardId].selected;
        // Update the cardStates array
        setCardStates(newCardStates);
        setShowAlert(true);
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    };

  return (
    <div className={classes.container}>
      <div className={classes.cardList}>
        {cardDetails.map((card, index) => (
          <Card className={classes.card} key={card.id}>
            <div className={classes.cardTop}>
              <div>
                <Typography className={classes.cardTitle}>{card.title}</Typography>
                <Typography className={classes.cardSubtitle}>{card.subtitle}</Typography>
              </div>
            </div>
            <CardMedia
                className={classes.cardImage}
                component="img"
                image={card.image}
                alt={card.title}
              />

            <div className={classes.container2}>
              <img alt="bed" src="images/BED.svg" height="32px" width="32px" className={classes.svg} />
            <div className={classes.item}>
                <div className={classes.redText}>
                    Property Price
                </div>
                <span className={classes.blackText}>Rs lakhs</span>
                <div className={classes.sliderContainer}>
                </div>
            </div>
            <img alt="bed" src="images/BATHROOM.svg" height="32px" width="32px" className={classes.svg} />
            <div className={classes.item}>
                <div className={classes.redText}>
                    Property Price
                </div>
                <span className={classes.blackText}>Rs  lakhs</span>
                <div className={classes.sliderContainer}>
                </div>
            </div> 
            <img alt="bed" src="images/garage.svg" height="32px" width="32px" className={classes.svg} />
            <div className={classes.item}>
                <div className={classes.redText}>
                    Property Price
                </div>
                <span className={classes.blackText}>Rs lakhs</span>
                <div className={classes.sliderContainer}>
                </div>
            </div>
            <svg width="32" height="32" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="29" cy="29" r="29" fill="#EBEBEB"/>
  <path d="M23.2734 40.2284C23.5866 39.9232 23.9079 39.4336 24.9101 39.4336H36.9531C37.8625 39.4336 42.8641 34.5622 43.5001 33.8701C44.1116 33.2039 46.8372 29.2277 47.592 27.5118C47.118 26.8909 45.8348 26.3753 44.3185 26.7169C42.8716 27.0437 42.0207 28.052 41.0451 29.8961L37.2934 31.7875" stroke="#363636" stroke-width="0.897874" stroke-miterlimit="10"/>
  <path d="M27.9543 34.6648H35.3196C38.5931 34.6648 38.5931 30.6908 35.3196 30.6908H30.4096C29.7281 30.6908 28.4492 29.1013 27.3685 29.1013H23.2766C22.1704 29.1013 20.7968 29.9722 20.0031 30.6908C18.7761 31.8823 16.6133 33.8694 16.6133 33.8694" stroke="#363636" stroke-width="0.897874" stroke-miterlimit="10"/>
  <path d="M20.0021 44.9965L24.094 41.0227L15.0919 32.28L11 36.2539L20.0021 44.9965Z" stroke="#363636" stroke-width="0.897874" stroke-miterlimit="10"/>
  <path d="M15.0898 36.2542L16.7265 37.8447" stroke="#363636" stroke-width="0.897874" stroke-miterlimit="10"/>
  <path d="M27.54 14C27.1639 14 26.7914 14.072 26.4439 14.2118C26.0964 14.3516 25.7806 14.5565 25.5146 14.8148C25.2487 15.0731 25.0377 15.3798 24.8938 15.7173C24.7498 16.0548 24.6758 16.4165 24.6758 16.7818C24.6759 17.5195 24.9777 18.227 25.5148 18.7487C26.0519 19.2703 26.7804 19.5634 27.54 19.5635C27.9161 19.5635 28.2886 19.4916 28.6361 19.3518C28.9837 19.212 29.2994 19.0071 29.5654 18.7488C29.8314 18.4905 30.0424 18.1839 30.1863 17.8464C30.3303 17.5089 30.4044 17.1471 30.4044 16.7818C30.4044 16.4165 30.3303 16.0547 30.1864 15.7172C30.0425 15.3797 29.8315 15.073 29.5655 14.8147C29.2995 14.5564 28.9837 14.3515 28.6362 14.2117C28.2887 14.0719 27.9162 14 27.54 14Z" stroke="#363636" stroke-width="0.897874" stroke-miterlimit="10"/>
  <path d="M35.7276 26.7169C34.968 26.7169 34.2395 26.4238 33.7023 25.9021C33.1652 25.3805 32.8634 24.673 32.8633 23.9352C32.8633 23.1975 33.165 22.49 33.7022 21.9683C34.2393 21.4466 34.9679 21.1536 35.7275 21.1536C36.1037 21.1535 36.4761 21.2254 36.8237 21.3652C37.1712 21.505 37.487 21.7099 37.7529 21.9682C38.0189 22.2265 38.2299 22.5332 38.3739 22.8707C38.5178 23.2082 38.5919 23.5699 38.5919 23.9352C38.5919 24.673 38.2901 25.3805 37.753 25.9022C37.2158 26.4238 36.4873 26.7169 35.7276 26.7169Z" stroke="#363636" stroke-width="0.897874" stroke-miterlimit="10"/>
  <path d="M26.3164 26.7166L36.9552 14" stroke="#363636" stroke-width="0.897874" stroke-miterlimit="10"/>
</svg>
                            <div className={classes.item}>
                <div className={classes.redText}>
                    Property Price
                </div>
                <span className={classes.blackText}>Rs lakhs</span>
                <div className={classes.sliderContainer}>
                </div>
            </div> 
            </div>

            <div className={classes.cardContent}>
              <div className={classes.smallCardContainer}>
                {card.smallCards.map((smallCard, index) => (
                  <Button
                    className={classes.smallCard}
                    key={index}
                    variant="outlined"
                    color="error"
                  >
                    <Typography className={classes.smallCardText}>
                      {smallCard.option}
                    </Typography>
                    <Typography className={classes.smallsmallCardText}>
                      {smallCard.description}
                    </Typography>
                  </Button>
                ))}
              </div>
              <div className={classes.buttonContainer2}>
                <Button color='red' className={classes.largeButton}>Loan Service</Button>
                <Button className={classes.largeButton}>Legal Service</Button>
                <Button className={classes.largeButton}>FRM Services</Button>
              </div>
            </div>

            <div className={classes.cardTop}>
              <div>
                <Typography className={classes.cardTitle}>Property Details</Typography>
                <Typography className={classes.cardSubtitle}>A 3 BHK in Doddanekkundi for sale is now available, it is one of a few houses at this rate. This North facing home is on the 3rd floor. This home is over 1500 sqft. & even comes with ample parking facility for car and bike.Amenities like community centre, play area for kids, garden & swimming pool gives you something to do in your free time. If you are looking for a home with intercom facility, security & lift, this home is just right for you. With premium amenities such as visitor parking this home provides you with many added benefits.Being less than 30 minutes from airport makes this home ideal for frequent flyers.</Typography>
              </div>
            </div>

            <div className={classes.cardTop}>
              <div>
                <Typography className={classes.cardTitle}>Amenities</Typography>
              </div>
            </div>


            <img alt="bed" src="images/group.svg"s className={classes.svg2} />

            <div className={classes.cardTop}>
              <div>
                <Typography className={classes.cardTitle}>Book Home Services</Typography>
              </div>
            </div>

            <div className={classes.buttonContainer}>
              <Button variant="outlined" className={classes.largeButton} color="error">
                Cleaning Services
              </Button>
              <Button variant="outlined" className={classes.largeButton} onClick={()=>handleSmallCardClick(index)} color="error">
                Planning Services
              </Button>
              <Button variant="outlined" className={classes.largeButton} onClick={()=>handleSmallCardClick(index)} color="error">
                CPMS
              </Button>
            </div>
            <div className={classes.buttonContainer}>
              <Button variant="outlined" className={classes.largeButton} color="error">
                Tenant Plan
              </Button>
              <Button variant="outlined" className={classes.largeButton} color="error">
                Interior Service
              </Button>
              <Button variant="outlined" className={classes.largeButton} onClick={()=>handleSmallCardClick(index)} color="error">
                Find Tenant
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MyCardList;
