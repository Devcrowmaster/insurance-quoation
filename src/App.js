import React, { useState } from 'react';
import Header from './components/Header';
import styled from '@emotion/styled';
import Form from './components/Form';
import Summary from './components/Summary';

const Container = styled.div`
  max-width: 40rem;
  margin: 0 auto;
`;

const ContainerForm = styled.div`
  background-color: #fff;
  padding: 3rem;
`;

function App() {

  const [summary,saveSummary] = useState({});
  return (
    <Container>
      <Header 
        title='Cotizador de Seguros'
      />

      <ContainerForm>
        <Form 
          saveSummary={saveSummary}
        />
        <Summary />
      </ContainerForm>
    </Container>
  );
}

export default App;
