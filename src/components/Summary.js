import React, { Fragment } from 'react';

const Summary = ({data}) => {

  const {brand,year,plan} = data;

  if(brand === '' || year === '' || plan === '') return null;

  return ( 
    <Fragment>
      <h2>Resumen de Cotizacion</h2>
      <ul>
        <li>Marca: </li>
        <li>Plan: </li>
        <li>Año del Auto: </li>
      </ul>
    </Fragment>
  );
}
 
export default Summary ;
