import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="absolute" sx={{ top: 0, backgroundColor: 'transparent', boxShadow: 'none' ,paddingX:12 }}>
      <Toolbar>
        <Typography variant="h6" component={Link} to="/" sx={{ flexGrow: 1, color: '#fff' }}>
          STUDIO GHIBLI
        </Typography>
        <div className="hidden md:flex space-x-4">
          <Button component={Link} to="/home" color="inherit" variant="text">
            Home
          </Button>
          <Button component={Link} to="/movies" color="inherit" variant="text">
            Movies
          </Button>
          <Button component={Link} to="/about-us" color="inherit" variant="text">
            About Us
          </Button>
          <Button component={Link} to="/gallery" color="inherit" variant="text">
            Gallery
          </Button>
          <Button component={Link} to="/login" color="primary" variant="contained">
            Login
          </Button>
          <Button component={Link} to="/register" color="primary" variant="contained">
            Register
          </Button>
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
            <MenuItem onClick={handleClose} component={Link} to="/home">
              Home
            </MenuItem>
            <MenuItem onClick={handleClose} component={Link} to="/movies">
              Movies
            </MenuItem>
            <MenuItem onClick={handleClose} component={Link} to="/about-us">
              About Us
            </MenuItem>
            <MenuItem onClick={handleClose} component={Link} to="/gallery">
              Gallery
            </MenuItem>
            <MenuItem onClick={handleClose} component={Link} to="/login">
              Login
            </MenuItem>
            <MenuItem onClick={handleClose} component={Link} to="/register">
              Register
            </MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
