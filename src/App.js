import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Stats from './pages/Stats';
import InfosTabac from './pages/InfosTabac';
import Footer from './components/Footer';
import PageTitle from './components/PageTitle';
import './styles/variables.css';
import './App.css';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
    background: {
      default: '#121212',
      paper: '#1e1e1e',
    },
  },
  typography: {
    fontFamily: [
      'Inter',
      'sans-serif'
    ].join(','),
    h1: {
      fontSize: '2.5rem',
      '@media (max-width:768px)': {
        fontSize: '2rem',
      },
      '@media (max-width:480px)': {
        fontSize: '1.5rem',
      },
      fontWeight: 700,
      letterSpacing: '-0.5px'
    },
    h2: {
      fontSize: '2rem',
      '@media (max-width:768px)': {
        fontSize: '1.5rem',
      },
      '@media (max-width:480px)': {
        fontSize: '1.2rem',
      },
      fontWeight: 700,
      letterSpacing: '-0.5px'
    }
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="app">
        <Navbar />
        <PageTitle />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/infos" element={<InfosTabac />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
