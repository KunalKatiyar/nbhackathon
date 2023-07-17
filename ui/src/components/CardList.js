import {React, useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, CardMedia, Typography, Button, Icon } from '@material-ui/core';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Alert, AlertTitle } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import PDF from "./investment.pdf";

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
    height: '330px',
    width: '610px',
    borderRadius: '10px',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
  },
  cardContent: {
    display: 'flex',
    paddingBottom: '20px',
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
  },
  cardImage: {
    width: '250px', // Decreased size of the image
    maxHeight: '200px', // Decreased size of the image
    objectFit: 'cover',
    paddingLeft: '10px',
    paddingTop: '5px',
    borderRadius: '5px 5px 5px 5px',
  },
  svg: {
    marginLeft: '17px',
  },
  smallCardContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridTemplateRows: 'repeat(2, 1fr)',
    gap: '10px',
    paddingLeft: "20px", // Increased size of the smallCardContainer
    backgroundColor: 'white',
    borderRadius: '0 10px 10px 0',
    height: '80px', // Decreased height of the smallCardContainer
  },
  smallCard: {
    display: 'block',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start', // Align text to the left
    height: '100%',
    width: '150px',
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
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '130px',
  },
  redText: {
    color: '#FA3A57',
    fontSize: '10px',
    display: 'flex',
    alignItems: 'center',
    paddingRight: '50px',
  },
  blackText: {
    color: 'black',
    fontSize: '10px',
    marginTop: '5px',
    paddingRight: '70px',
  },
  largeButton: {
    backgroundColor: 'white',
    color: '#FA3A57',
    borderRadius: '5px',
    padding: '10px 20px',
    fontWeight: 'bold',
    fontSize: '10px',
  },
  smallButton: {
    backgroundColor: 'white',
    color: '#FA3A57',
    borderRadius: '5px',
    padding: '5px 10px',
    fontWeight: 'bold',
    fontSize: '14px',
  },
  atag: {
    textDecoration: 'none',
  }
}));

const CardList = (props) => {
  const classes = useStyles();

  useEffect(() => {
    console.log(props.tasks);
    }, []);
  const [showAlert, setShowAlert] = useState(false);
  const [showAlert2, setShowAlert2] = useState(false);

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  const handleCloseAlert2 = () => {
    setShowAlert2(false);
  };


  console.log(props.tasks[0]);

  const cardDetails = props.tasks;
  cardDetails.map((card, index) => {
    card.index = index;
    card.smallCards = [
        { option: card.price, description: card.sqft + " sq ft." },
        { option: Math.round((card.rental_yield + Number.EPSILON) * 100) / 100 + "%", description: "Rental Yield" },
        { option: Math.round((card.roi + Number.EPSILON) * 100) / 100
        + "%", description: 'Return' },
        { option: card.sqft + " sqft", description: 'Builtup Area' },
    ]
    });

  // Example JSON array of card details
//   const cardDetails = [
//     {
//       id: 1,
//       title: '3 BHK Apartments, Marathalli, Bangalore, Karnataka',
//       subtitle: '3 BHK Apartments, Marathalli, Bangalore, Karnataka',
//       image: '/images/property.png',
//       smallCards: [
//         { option: 'Option 1', description: 'Descripti' },
//         { option: 'Option 2', description: 'Descripti' },
//         { option: 'Option 3', description: 'Descripti' },
//         { option: 'Option 4', description: 'Descripti' },
//       ],
//     },
//     {
//       id: 2,
//       title: 'Card 1',
//       subtitle: 'Subtitle 1',
//       image: '/images/property.png',
//       smallCards: [
//         { option: 'Option 1', description: 'Descripti' },
//         { option: 'Option 2', description: 'Descripti' },
//         { option: 'Option 3', description: 'Descripti' },
//         { option: 'Option 4', description: 'Descripti' },
//       ],
//     },
//     // Add more card details objects here
//   ];

  //Create an array of states for each card
    const constCardStates = [{}];
    for(let i = 0; i < cardDetails.length; i++) {
        constCardStates[i] = { id: cardDetails[i].index, selected: false };
    }
    const [cardStates, setCardStates] = useState([{}]);
    for(let i = 0; i < cardDetails.length; i++) {
        setCardStates[i] = { id: cardDetails[i].index, selected: false };
    }

    // Function to handle the click event on the small cards
    const handleSmallCardClick = (cardId) => {
        setShowAlert(true);
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    };

    const handleSmallCardClick2 = (cardId) => {
      setShowAlert2(true);
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

    const navigate = useNavigate();

  return (
    <div className={classes.container}>
      <div className={classes.cardList}>
                {showAlert && (
                    <Alert severity="success" onClose={handleCloseAlert}>
                        Your RM Contact will be sent on your registered email!
                    </Alert>
                )}
        {cardDetails.map((card, index) => (
          <Card className={classes.card} key={card.id}>
            <div className={classes.cardTop}>
            <a href={card.redirect_url} className={classes.atag}>
              <div>
                <Typography className={classes.cardTitle}>{"Property in " + card.locality}</Typography>
                {/* <Typography className={classes.cardSubtitle}>{card.subtitle}</Typography> */}
              </div>
              </a>
            </div>
            <div className={classes.cardContent}>
              <CardMedia
                className={classes.cardImage}
                component="img"
                image="/images/property.png"
                alt={card.locality}
              />
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
            </div>
            <div className={classes.container2}>
            <svg width="32" height="32" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes.svg}>
  <circle cx="29" cy="29" r="29" fill="#EBEBEB"/>
  <path d="M28.3789 13.5862V16.1728" stroke="#222222" stroke-width="0.945919" stroke-miterlimit="10"/>
  <path d="M14.5859 27.3806H17.1726" stroke="#222222" stroke-width="0.945919" stroke-miterlimit="10"/>
  <path d="M39.5898 27.3806H42.1763" stroke="#222222" stroke-width="0.945919" stroke-miterlimit="10"/>
  <path d="M21.4805 19.6216L28.3778 28.2432L35.2751 23.9323" stroke="#222222" stroke-width="0.945919" stroke-miterlimit="10"/>
  <path d="M36.1372 34.2781C35.7976 34.2781 35.4612 34.345 35.1474 34.475C34.8336 34.605 34.5485 34.7955 34.3083 35.0357C34.0681 35.2759 33.8776 35.561 33.7476 35.8748C33.6176 36.1887 33.5508 36.525 33.5508 36.8647C33.5508 37.5507 33.8233 38.2085 34.3083 38.6936C34.7934 39.1786 35.4513 39.4511 36.1372 39.4511C36.8232 39.4511 37.4811 39.1786 37.9661 38.6936C38.4511 38.2085 38.7237 37.5507 38.7237 36.8647C38.7237 36.1787 38.4512 35.5208 37.9662 35.0357C37.4811 34.5507 36.8232 34.2781 36.1372 34.2781Z" stroke="#222222" stroke-width="0.945919" stroke-miterlimit="10"/>
  <path d="M43.899 46.3485C43.213 46.3485 42.5551 46.076 42.0701 45.5909C41.585 45.1058 41.3125 44.448 41.3125 43.762C41.3125 43.076 41.585 42.4181 42.0701 41.9331C42.5551 41.448 43.213 41.1755 43.899 41.1755C44.5849 41.1756 45.2428 41.4481 45.7278 41.9331C46.2129 42.4182 46.4854 43.076 46.4854 43.762C46.4854 44.448 46.2129 45.1058 45.7278 45.5909C45.2428 46.0759 44.5849 46.3484 43.899 46.3485Z" stroke="#222222" stroke-width="0.945919" stroke-miterlimit="10"/>
  <path d="M35.2812 46.3483L44.765 34.2781" stroke="#222222" stroke-width="0.945919" stroke-miterlimit="10"/>
  <path d="M30.9673 43.5595C30.112 43.6943 29.2475 43.7621 28.3817 43.7621C26.2305 43.7621 24.1004 43.3385 22.1129 42.5153C20.1254 41.6921 18.3195 40.4855 16.7983 38.9644C15.2771 37.4433 14.0704 35.6375 13.2471 33.6501C12.4238 31.6626 12.0001 29.5325 12 27.3813C11.9999 25.23 12.4235 23.0998 13.2466 21.1123C14.0698 19.1248 15.2764 17.3189 16.7976 15.7977C18.3187 14.2765 20.1246 13.0699 22.1122 12.2467C24.0997 11.4235 26.2299 10.9999 28.3811 11C30.5324 10.9999 32.6626 11.4235 34.6501 12.2467C36.6376 13.0699 38.4435 14.2765 39.9646 15.7977C41.4858 17.3189 42.6924 19.1248 43.5156 21.1123C44.3388 23.0998 44.7624 25.23 44.7622 27.3813C44.7629 28.5407 44.641 29.6969 44.3985 30.8307" stroke="#222222" stroke-width="0.945919" stroke-miterlimit="10"/>
</svg>
            <div className={classes.item}>
                <div className={classes.redText}>
                    Demand
                </div>
                <span className={classes.blackText}>{card.rental_demand}</span>
                <div className={classes.sliderContainer}>
                </div>
            </div> 
            <svg width="32" height="32" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg"  className={classes.svg}>
                <circle cx="29" cy="29" r="29" fill="#EBEBEB"/>
                <path d="M23.375 40.593C23.6439 40.3241 23.9667 39.8398 24.8812 39.8398H35.3175C36.1243 39.8398 40.697 35.2671 41.2887 34.6216C41.8268 33.976 44.3551 30.2643 45.0007 28.6503C44.5702 28.0586 43.3868 27.5745 41.9881 27.8973C40.6436 28.2201 39.8901 29.1346 38.9755 30.9098L35.5326 32.685" stroke="#222222" stroke-width="0.823157" stroke-linejoin="round"/>
                <path d="M27.8924 35.3745H33.8637C36.8762 35.3745 36.8762 31.6625 33.8637 31.6625H29.9365C29.291 31.6625 28.1613 30.1562 27.1391 30.1562H23.4273C22.4051 30.1562 21.1677 30.9631 20.4147 31.6625L17.4023 34.6752" stroke="#222222" stroke-width="0.823157" stroke-linejoin="round"/>
                <path d="M21.1713 45.8114L24.8833 42.0995L15.8994 33.1157L12.1875 36.8813L21.1713 45.8114Z" stroke="#222222" stroke-width="0.823157" stroke-linejoin="round"/>
                <path d="M15.9453 36.8247L17.2894 38.4377" stroke="#222222" stroke-width="0.823157" stroke-linejoin="round"/>
                <path d="M39.0625 19.6201V30.1043" stroke="#222222" stroke-width="0.823157"/>
                <path d="M24.0078 30.1043V19.6201" stroke="#222222" stroke-width="0.823157"/>
                <path d="M42.0445 22.6791L31.6081 12.189L21.1719 22.6791" stroke="#222222" stroke-width="0.823157"/>
                <path d="M26.4297 13.707V17.4705" stroke="#222222" stroke-width="0.823157"/>
                <path d="M29.3477 31.6079V24.1309H33.8665V31.6079" stroke="#222222" stroke-width="0.823157"/>
                </svg>
            <div className={classes.item}>
                <div className={classes.redText}>
                    Value for money
                </div>
                <span className={classes.blackText}>Deal</span>
                <div className={classes.sliderContainer}>
                </div>
            </div>
            <svg width="32" height="32" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes.svg}>
  <circle cx="29" cy="29" r="29" fill="#EBEBEB"/>
  <path d="M23.2734 40.0066C23.5866 39.6923 23.9079 39.1882 24.9101 39.1882H36.9531C37.8625 39.1882 42.8641 34.1722 43.5001 33.4596C44.1116 32.7736 46.8372 28.6795 47.592 26.9126C47.118 26.2733 45.8348 25.7424 44.3185 26.0942C42.8716 26.4306 42.0207 27.4688 41.0451 29.3677L37.2934 31.3152" stroke="#363636" stroke-width="0.897874" stroke-miterlimit="10"/>
  <path d="M27.9543 34.2779H35.3196C38.5931 34.2779 38.5931 30.186 35.3196 30.186H30.4096C29.7281 30.186 28.4492 28.5493 27.3685 28.5493H23.2766C22.1704 28.5493 20.7968 29.446 20.0031 30.186C18.7761 31.4128 16.6133 33.4589 16.6133 33.4589" stroke="#363636" stroke-width="0.897874" stroke-miterlimit="10"/>
  <path d="M20.0021 44.9164L24.094 40.8246L15.0919 31.8225L11 35.9143L20.0021 44.9164Z" stroke="#363636" stroke-width="0.897874" stroke-miterlimit="10"/>
  <path d="M15.0898 35.9146L16.7265 37.5514" stroke="#363636" stroke-width="0.897874" stroke-miterlimit="10"/>
  <path d="M27.54 13C27.1639 13 26.7914 13.0741 26.4439 13.218C26.0964 13.362 25.7806 13.573 25.5146 13.839C25.2487 14.1049 25.0377 14.4207 24.8938 14.7682C24.7498 15.1158 24.6758 15.4882 24.6758 15.8644C24.6759 16.624 24.9777 17.3525 25.5148 17.8896C26.0519 18.4267 26.7804 18.7285 27.54 18.7286C27.9161 18.7286 28.2886 18.6545 28.6361 18.5106C28.9837 18.3667 29.2994 18.1557 29.5654 17.8897C29.8314 17.6238 30.0424 17.308 30.1863 16.9605C30.3303 16.613 30.4044 16.2405 30.4044 15.8644C30.4044 15.4882 30.3303 15.1157 30.1864 14.7682C30.0425 14.4206 29.8315 14.1049 29.5655 13.8389C29.2995 13.5729 28.9837 13.3619 28.6362 13.218C28.2887 13.074 27.9162 13 27.54 13Z" stroke="#363636" stroke-width="0.897874" stroke-miterlimit="10"/>
  <path d="M35.7276 26.0942C34.968 26.0941 34.2395 25.7923 33.7023 25.2552C33.1652 24.7181 32.8634 23.9896 32.8633 23.2299C32.8633 22.4703 33.165 21.7418 33.7022 21.2046C34.2393 20.6675 34.9679 20.3657 35.7275 20.3657C36.1037 20.3657 36.4761 20.4397 36.8237 20.5837C37.1712 20.7276 37.487 20.9386 37.7529 21.2045C38.0189 21.4705 38.2299 21.7863 38.3739 22.1338C38.5178 22.4813 38.5919 22.8538 38.5919 23.2299C38.5919 23.9896 38.2901 24.7181 37.753 25.2552C37.2158 25.7924 36.4873 26.0942 35.7276 26.0942Z" stroke="#363636" stroke-width="0.897874" stroke-miterlimit="10"/>
  <path d="M26.3164 26.094L36.9552 13" stroke="#363636" stroke-width="0.897874" stroke-miterlimit="10"/>
</svg>
                            <div className={classes.item}>
                <div className={classes.redText}>
                    Growth Rate
                </div>
                <span className={classes.blackText}>{card.yoy_growth + "% Y-o-Y"}</span>
                <div className={classes.sliderContainer}>
                </div>
            </div> 
            </div>
            {cardStates === undefined && !cardStates[index].selected? <div className={classes.buttonContainer}>
              <Button variant="outlined" className={classes.largeButton} color="error">
                Get Investment Sheet
              </Button>
              <Button variant="outlined" className={classes.largeButton} onClick={()=>handleSmallCardClick(index)} color="error">
                Contact RM
              </Button>
              <Button variant="outlined" className={classes.largeButton} color="error">
                <FavoriteBorderIcon />
              </Button>
            </div>
            :
            <div className={classes.buttonContainer}>
              <a
        href={PDF}
        download="Example-PDF-document"
        target="_blank"
        rel="noreferrer"
      >
              <Button variant="outlined" className={classes.largeButton} color="error">
                Get Investment Sheet
              </Button>
              </a>
              <Button variant="outlined" className={classes.largeButton} onClick={()=>handleSmallCardClick(index)} color="error">
                Contact RM
              </Button>
              <Button variant="outlined" className={classes.largeButton} onClick={()=>navigate('/myproperty')}color="error">
                Close Property
              </Button>
              <Button variant="outlined" className={classes.largeButton} color="error">
                <FavoriteBorderIcon />
              </Button>
            </div>}
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CardList;
