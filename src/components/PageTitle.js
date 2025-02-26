import React from 'react';
import { useLocation } from 'react-router-dom';

function PageTitle() {
  const location = useLocation();

  React.useEffect(() => {
    let title = 'New Life';
    
    switch (location.pathname) {
      case '/':
        title = 'New Life - Accueil';
        break;
      case '/infos':
        title = 'New Life - Informations Tabac';
        break;
      case '/stats':
        title = 'New Life - Statistiques';
        break;
      case '/app-mobile':
        title = 'New Life - Application Mobile';
        break;
      default:
        break;
    }
    
    document.title = title;
  }, [location.pathname]);

  return null;
}

export default React.memo(PageTitle);
