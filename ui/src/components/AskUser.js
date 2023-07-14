import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import { Button, Slider } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { useNavigate } from 'react-router-dom';

function valuetext1(sliderValue1) {
    return `Rs. ${sliderValue1} lakh`;
}



const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 'fit-content',
    padding: '30px',
    border: '2px solid red',
    borderRadius: '10px',
    backgroundColor: 'white',
    gap: '120px', 
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  redText: {
    color: '#FA3A57',
    fontSize: '20px',
    display: 'flex',
    alignItems: 'center',
  },
  arrowIcon: {
    color: '#FA3A57',
    fontSize: '18px',
    marginLeft: '5px',
  },
  blackText: {
    color: 'black',
    fontSize: '15px',
    marginTop: '5px',
    paddingRight: '20px',
  },
  buttonContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  redButton: {
    backgroundColor: '#FA3A57',
    color: 'white',
    marginRight: '10px',
    borderRadius: '5px',
    paddingTop: "10px",
    fontWeight: 'bold',
  },
  sliderContainer: {
    width: '200px',
    marginTop: '20px',
  },
}));

const AskUser = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  
  const [sliderValue1, setSliderValue1] = useState([0,100]);
  const [sliderValue2, setSliderValue2] = useState(5);
  const [sliderValue3, setSliderValue3] = useState(3);
  const [showSlider1, setShowSlider1] = useState(false);
  const [showSlider2, setShowSlider2] = useState(false);
  const [showSlider3, setShowSlider3] = useState(false);

  const handleContainerClick = (containerIndex) => {
    switch (containerIndex) {
      case 1:
        setShowSlider1(!showSlider1);
        break;
      case 2:
        setShowSlider2(!showSlider2);
        break;
      case 3:
        setShowSlider3(!showSlider3);
        break;
      default:
        break;
    }
  };

  const handleSliderChange = (event, newValue) => {
    console.log(newValue);
    switch (event.target.id) {

      case 'slider1':
        setSliderValue1(newValue);
        break;
      case 'slider2':
        setSliderValue2(newValue);
        break;
      case 'slider3':
        setSliderValue3(newValue);
        break;
      default:
        break;
    }
  };

  const marks = [
    {
      value: 5,
      label: '5 yrs',
    },
    {
      value: 10,
      label: '10 yrs',
    },
    {
      value: 20,
      label: '20 yrs',
    }
  ];

  function valuetext2(value) {
    return `${value} yrs`;
  }

  const handleChange = (event, newValue) => {
    setSliderValue1(newValue);
  };

  const handleSearch = () => {
    // Redirect to /search and pass the slider values as query parameters
    navigate(`/search?value1=${sliderValue1}&value2=${sliderValue2}&value3=${sliderValue3}`);
  };

  return (
    <div className={classes.container}>
      <div className={classes.item}>
        <div className={classes.redText}
        onClick={() => handleContainerClick(1)}>
          Property Price
          <ArrowDownwardIcon className={classes.arrowIcon} />
        </div>
        <span className={classes.blackText}>Rs {sliderValue1[0]} lakh - {sliderValue1[1]} lakhs</span>
        {showSlider1 && (
          <div className={classes.sliderContainer}>
            <Slider
                id="slider1"
                onChangeCommitted={handleSliderChange}
                getAriaLabel={() => 'Budget range'}
                value={sliderValue1}
                onChange={handleSliderChange}
                valueLabelDisplay="auto"
                color="#FA3A57"
            />
          </div>
        )}
        <div className={classes.sliderContainer}>
        </div>
      </div>
      <div className={classes.item}>
        <div className={classes.redText}
        onClick={() => handleContainerClick(2)}>
          Duration
          <ArrowDownwardIcon className={classes.arrowIcon} />
        </div>
        <span className={classes.blackText}>{sliderValue2} Yrs</span>
        {showSlider2 && (
          <div className={classes.sliderContainer}>
            <Slider
                id="slider2"
                aria-label="Restricted values"
                defaultValue={5}
                onChange={handleSliderChange}
                step={null} 
                marks={marks}
                min={5}
                max={20}
                valueLabelDisplay="auto"
            />
          </div>
        )}
      </div>
      <div className={classes.item}>
        <div className={classes.redText}
        onClick={() => handleContainerClick(3)}>
          Return
          <ArrowDownwardIcon className={classes.arrowIcon} />
        </div>
        <span className={classes.blackText}>{sliderValue3} %</span>
        {showSlider3 && (
          <div className={classes.sliderContainer}>
            <Slider
                id="slider3"
                aria-label="Default"
                defaultValue={3}
                onChange={handleSliderChange}
                valueLabelDisplay="auto"
            />
          </div>
        )}
      </div>
      <div className={classes.item}>
        <div className={classes.buttonContainer}>
            <Button variant="contained" className={classes.redButton} onClick={handleSearch}>
                <SearchIcon className={classes.searchIcon} />
                Search
            </Button>
        </div>
      </div>
    </div>
  );
};

export default AskUser;
