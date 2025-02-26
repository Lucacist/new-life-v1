import React from 'react';
import { Typography, Box } from '@mui/material';
import { useLocation } from 'react-router-dom';
import '../styles/Footer.css';

function Footer() {
  const location = useLocation();
  const isHome = React.useMemo(() => location.pathname === '/', [location.pathname]);

  return (
    <Box component="footer" className={`footer ${isHome ? 'footer-fixed' : ''}`}>
      <Typography variant="body2" className="footer-text">
        2025 New-Life.inc. Tous droits réservés.
      </Typography>
    </Box>
  );
}

export default React.memo(Footer);
