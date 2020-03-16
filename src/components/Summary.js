import React from 'react';
import styled from '@emotion/styled';
import { capitalizeText } from '../helper';
import PropTypes from 'prop-types';
const ContainerSummary = styled.div`
  padding: 1rem;
  text-align:center;
  background-color: #00838f;
  color: #fff;
  margin-top: 1rem;
`;


const Summary = ({data}) => {

  const {brand,year,plan} = data;

  if(brand === '' || year === '' || plan === '') return null;

  return ( 
    <ContainerSummary>
      <h2>Resumen de Cotizacion</h2>
      <ul>
        <li>Marca: {capitalizeText(brand)}</li>
        <li>Plan: {capitalizeText(plan)}</li>
        <li>Año del Auto:  {year}</li>
      </ul>
    </ContainerSummary>
  );
}

Summary.propTypes = {
  data : PropTypes.object.isRequired
}
export default Summary ;
