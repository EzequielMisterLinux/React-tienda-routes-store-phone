import React from 'react';
import { ButtonVM } from '../style-components/themes';
import { Button } from '../style-components/Button';

const InfoCelulares = ({ celularInfo, verMas, toggleVerMas }) => {
  const { modelo, precio, desc } = celularInfo;

  return (
    <div>
      <h2>{modelo}</h2>
      <ButtonVM onClick={toggleVerMas}>Ver Caracteristicas</ButtonVM>
      {verMas && (
        <>
        
          <p>Precio: {precio}</p>
          <p>{desc}</p>
          <Button>agregar al carrito</Button>
          
        </>
      )}
    </div>
  );
};

export default InfoCelulares;
