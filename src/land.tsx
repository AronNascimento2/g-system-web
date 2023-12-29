import React, { useEffect } from 'react';

const LandscapeLock = () => {
  useEffect(() => {
    const handleOrientationChange = () => {
      const isLandscape = (window.orientation === 90 || window.orientation === -90);
      if (isLandscape) {
        // Coloque aqui a lógica para orientação paisagem
        // Por exemplo, um alerta ou estilos específicos.
      }
    };

    window.addEventListener('orientationchange', handleOrientationChange);
    
    return () => {
      window.removeEventListener('orientationchange', handleOrientationChange);
    };
  }, []);

  return null; // Este componente não renderiza nada visível na interface
};

export default LandscapeLock;
