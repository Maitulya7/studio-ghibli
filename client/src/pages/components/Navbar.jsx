import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Menu, MenuItem, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ scrollToHero, scrollToMovie, scrollToGallery, scrollToAbout }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const email = localStorage.getItem('email');
    setIsLoggedIn(Boolean(email));
  }, []);

  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem('email'); // Clear the email from local storag
    localStorage.removeItem('UserId')
    setIsLoggedIn(false); // Update the logged-in state
    navigate('/login'); // Redirect to the home page after logout
  };

  return (
    <AppBar position="sticky" sx={{ top: 0, backgroundColor: '#222', boxShadow: 'none', paddingX: 12 }}>
      <Toolbar>
        <Typography variant="h6" component={Link} to="/" sx={{ flexGrow: 1, color: '#fff' }}>
          STUDIO GHIBLI
        </Typography>
        <div className="hidden md:flex space-x-4">
          <Button onClick={scrollToHero} color="inherit" variant="text">
            Home
          </Button>
          <Button onClick={scrollToMovie} color="inherit" variant="text">
            Movies
          </Button>
          <Button onClick={scrollToAbout} color="inherit" variant="text">
            About Us
          </Button>
          <Button onClick={scrollToGallery} color="inherit" variant="text">
            Gallery
          </Button>

          {isLoggedIn ? (
            <>
              <IconButton component={Link} to="/profile" color="inherit">
                <AccountCircle fontSize='medium' />
              </IconButton>
              <Button onClick={handleLogout} color="error" variant="contained">
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button component={Link} to="/login" color="primary" variant="contained">
                Login
              </Button>
              <Button component={Link} to="/register" color="primary" variant="contained">
                Register
              </Button>
            </>
          )}
        </div>
        <div className="md:hidden">
          <IconButton
            size="large"
            edge="end"
            aria-label="menu"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Home</MenuItem>
            <MenuItem onClick={handleClose}>Movies</MenuItem>
            <MenuItem onClick={handleClose}>About Us</MenuItem>
            <MenuItem onClick={handleClose}>Gallery</MenuItem>

            {isLoggedIn ? (
              <>
                <MenuItem component={Link} to="/profile" onClick={handleClose}>
                  Profile
                </MenuItem>
                <MenuItem  onClick={() => { handleClose(); handleLogout(); }}>
                  Logout
                </MenuItem>
              </>
            ) : (
              <>
                <MenuItem component={Link} to="/login" onClick={handleClose}>
                  Login
                </MenuItem>
                <MenuItem component={Link} to="/register" onClick={handleClose}>
                  Register
                </MenuItem>
              </>
            )}
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
