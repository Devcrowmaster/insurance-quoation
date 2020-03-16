import React from 'react';
import Header from './components/Header';
import styled from '@emotion/styled';
import Form from './components/Form';

const Container = styled.div`
  max-width: 40rem;
  margin: 0 auto;
`;

const ContainerForm = styled.div`
  background-color: #fff;
  padding: 3rem;
`;

function App() {
  return (
    <Container>
      <Header 
        title='Cotizador de Seguros'
      />

      <ContainerForm>
        <Form />
      </ContainerForm>
    </Container>
  );
}

export default App;
