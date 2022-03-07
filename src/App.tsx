import { Grid } from '@chakra-ui/react';
import React, { useState } from 'react';
import { Teclado } from './components/Teclado';
import { Tela } from './components/Tela';

function App() {
  const [valor, setValor] = useState<Number[]>([]);
  let votacao: Number[];

  const adicionarValor = (valor: number) => {
    setValor((prevState) => [...prevState, valor]);
  };

  const removerValor = () => {
    setValor((prevState) => prevState.slice(0, -1));
  };

  const enviarValor = (event: React.MouseEvent) => {
    event.preventDefault();
    votacao = valor;
    setValor([]);
  };

  

  return (
    <div>
      <h1>Urna Eletrônica</h1>
      <Grid templateColumns='repeat(5, 1fr)' gap={4}>
        <Tela valor={valor} />
        <Teclado
          adicionarValor={adicionarValor}
          removerValor={removerValor}
          enviarValor={enviarValor}
        />
      </Grid>
    </div>
  );
}

export default App;
