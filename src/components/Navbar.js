import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
import '../styles/variables.css';
import '../styles/Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Empêcher le défilement du body quand le menu est ouvert
    document.body.style.overflow = !isMenuOpen ? 'hidden' : 'unset';
  };

  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'unset';
  };

  const menuItems = [
    { text: 'Accueil', path: '/' },
    { text: 'Infos Tabac', path: '/infos' },
    { text: 'Statistiques', path: '/stats' }
  ];

  return (
    <>
      <AppBar 
        position="fixed" 
        className={`navbar ${scrolled ? 'scrolled' : ''}`}
        elevation={0}
        sx={{ 
          background: 'transparent',
          boxShadow: 'none',
          '& .MuiPaper-root': {
            backgroundColor: 'transparent',
            boxShadow: 'none'
          }
        }}
      >
        <Toolbar className="navbar-toolbar">
          <Typography variant="h6" component={Link} to="/" className="navbar-brand">
            NEW LIFE
          </Typography>

          {/* Menu pour desktop */}
          <Box className="desktop-menu">
            {menuItems.map((item) => (
              <Button
                key={item.path}
                className="nav-link"
                component={Link}
                to={item.path}
              >
                {item.text}
              </Button>
            ))}
          </Box>

          {/* Bouton hamburger pour mobile */}
          <IconButton
            className="mobile-menu-button"
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Menu mobile plein écran */}
      <div className={`mobile-menu-overlay ${isMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-content">
          {menuItems.map((item) => (
            <Button
              key={item.path}
              className="mobile-menu-item"
              component={Link}
              to={item.path}
              onClick={handleMenuItemClick}
            >
              {item.text}
            </Button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
