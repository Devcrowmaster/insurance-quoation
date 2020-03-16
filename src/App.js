import React, { useState } from 'react';
import Header from './components/Header';
import styled from '@emotion/styled';
import Form from './components/Form';
import Summary from './components/Summary';
import Result from './components/Result';

const Container = styled.div`
  max-width: 40rem;
  margin: 0 auto;
`;

const ContainerForm = styled.div`
  background-color: #fff;
  padding: 3rem;
`;

function App() {

  const [summary,saveSummary] = useState({
    quotation : 0,
    data:{
      brand: '',
      year:'',
      plan: ''
    }
  });

  const {data ,quotation} = summary;

  return (
    <Container>
      <Header 
        title='Cotizador de Seguros'
      />

      <ContainerForm>
        <Form 
          saveSummary={saveSummary}
        />
        <Summary
          data={data}
        />
        <Result
          quotation={quotation}
        />
      </ContainerForm>
    </Container>
  );
}

export default App;
