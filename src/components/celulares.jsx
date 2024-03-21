import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../style-components/themes';
import { Card, Centrado } from '../style-components/Button';
import { useParams } from 'react-router-dom';
import dataCelu from '../data/dataCelu';
import InfoCelulares from './infocelulares';

const Celulares = () => {
  const { nameCelular } = useParams();
  const celularInfo = dataCelu[nameCelular];
  const [verMas, setVerMas] = useState(false);

  const toggleVerMas = () => {
    setVerMas(!verMas);
  };

  if (!celularInfo) {
    return <div>Celular no encontrado</div>;
  }

  return (
    <ThemeProvider theme={theme}>
      <Card>
        <Centrado>
          <div style={{ maxWidth: '200px' }}> 
            <img 
              src={celularInfo.imagen} 
              alt={celularInfo.modelo} 
              style={{ maxWidth: '100%', height: 'auto' }} 
              
            />
            
            
          </div>
        </Centrado>
        <InfoCelulares
          celularInfo={celularInfo}
          verMas={verMas}
          toggleVerMas={toggleVerMas}
          
        />
        
      </Card>
    </ThemeProvider>
  );
};

export default Celulares;
