import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import '../styles/variables.css';
import '../styles/Home.css';
import googlePlayIcon from '../assets/google-play-badge.png';
import appStoreIcon from '../assets/app-store-badge.png';

const Home = () => {
  return (
    <Container maxWidth={false} className="home-container">
      <Box className="title-box">
        <Typography variant="h1">New Life</Typography>
      </Box>

      <Box className="content-section">
        <Typography variant="h4" className="feature-title">
          Votre Voyage vers une Vie Sans Tabac
        </Typography>

        <Typography variant="body1" className="text-content">
          Une révolution dans votre parcours d'arrêt du tabac arrive bientôt sur vos smartphones. Notre application mobile innovante vous accompagnera pas à pas vers une vie plus saine, avec des fonctionnalités uniques :
        </Typography>

        <Box className="feature-grid">
          <Box>
            <Typography variant="h6" className="feature-title">
              🎯 Suivi Personnalisé
            </Typography>
            <Typography variant="body1" className="feature-description">
              Suivez votre progression et visualisez vos accomplissements jour après jour.
            </Typography>
          </Box>

          <Box>
            <Typography variant="h6" className="feature-title">
              💰 Calculateur d'Économies
            </Typography>
            <Typography variant="body1" className="feature-description">
              Découvrez combien vous économisez en temps réel et planifiez vos futures récompenses.
            </Typography>
          </Box>

          <Box>
            <Typography variant="h6" className="feature-title">
              🌟 Conseils et Accompagnement
            </Typography>
            <Typography variant="body1" className="feature-description">
              Accédez à des conseils personnalisés et des stratégies efficaces pour surmonter les envies.
            </Typography>
          </Box>
        </Box>

        <Typography variant="h5" className="store-title">
          Bientôt disponible sur
        </Typography>

        <Box className="store-buttons">
          <img src={appStoreIcon} alt="Télécharger sur l'App Store" />
          <img src={googlePlayIcon} alt="Télécharger sur Google Play" />
        </Box>
      </Box>
    </Container>
  );
};

export default Home;
