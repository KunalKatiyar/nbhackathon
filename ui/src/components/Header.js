import React from 'react';
import { AppBar, Toolbar, Typography, Box, makeStyles } from '@material-ui/core';
import { Link, useLocation } from 'react-router-dom';

const useStyles = makeStyles(() => ({
    appBar: {
      backgroundColor: 'transparent',
      boxShadow: 'none',
      padding: "15px",
    },
  }));

const Header = () => {
 const location = useLocation();
 const classes = useStyles();

  const isLinkActive = (path) => {
    return location.pathname === path ? { color: '#FA3A57' } : { color: 'black' };
  };
  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        <img src="/images/logo.png" alt="Logo" style={{ marginRight: '10px', paddingTop: "25px" }} />
        <Typography variant="h6" style={{ flexGrow: 1 }}>
           
        </Typography>
        <Box display="flex" alignItems="center">
            <Typography variant="subtitle1">
                <Link to="/" style={{ ...isLinkActive('/'), marginRight: '10px', padding: '20px' }}>
                    Home
                </Link>
                <Link to="/news" style={{ ...isLinkActive('/news'), marginRight: '10px', padding: '20px' }}>
                    News
                </Link>
                <Link to="/trends" style={{ ...isLinkActive('/trends'), marginRight: '10px', padding: '20px' }}>
                    Trends
                </Link>
                <Link to="/blogs" style={{ ...isLinkActive('/blogs'), marginRight: '10px', padding: '20px' }}>
                    Blogs
                </Link>
            </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;