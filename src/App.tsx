import { Grid } from '@chakra-ui/react';
import React, { useState } from 'react';
import { Teclado } from './components/Teclado';
import { Tela } from './components/Tela';
import dados from './dados.json';

function App() {
  const [valor, setValor] = useState<Number[]>([]);

  localStorage.setItem('tela1', valor.join(''));
  const tela1 = localStorage.getItem('tela1');
  const tela2 = localStorage.getItem('tela2');
  const tela3 = localStorage.getItem('tela3');
  const tela4 = localStorage.getItem('tela4');
  const tela = localStorage.getItem('tela');

  const adicionarValor = (valor: number) => {
    setValor((prevState) => [...prevState, valor]);
  };

  const removerValor = () => {
    setValor((prevState) => prevState.slice(0, -1));
  };

  const enviarValor = (event: React.MouseEvent) => {
    event.preventDefault();
    setValor([]);
  };

  const anularValor = () => {
    setValor([]);
  };

  const votouEleitor = () => {
    const votouCerto = dados.eleitores.find(
      (eleitor) => eleitor.id === Number(valor.join(''))
    );

    if (votouCerto && tela1 && valor.length === 0) {
      const index = dados.eleitores.indexOf(votouCerto);
      dados.eleitores[index].quantidadeVotos++;

      localStorage.removeItem('tela1');
      localStorage.setItem('tela2', valor.join(''));

      return true;
    }

    return false;
  };

  const votouLanche = () => {
    const votouCerto = dados.lanches.find(
      (lanche) => lanche.id === Number(valor.join(''))
    );

    if (votouCerto) {
      const index = dados.lanches.indexOf(votouCerto);
      dados.lanches[index].quantidadeVotos++;

      localStorage.removeItem('tela2');
      localStorage.setItem('tela3', valor.join(''));

      return true;
    }

    return false;
  };

  const jaVotouNoEleitor = votouEleitor();
  const jaVotouLanche = votouLanche();

  return (
    <div>
      <h1>Urna Eletrônica</h1>
      <Grid templateColumns='repeat(5, 1fr)' gap={4}>
        {!jaVotouNoEleitor && tela1 && (
          <Tela dados={dados.eleitores} />
        )}
        <Teclado
          adicionarValor={adicionarValor}
          removerValor={removerValor}
          enviarValor={enviarValor}
          anularValor={anularValor}
        />
      </Grid>
    </div>
  );
}

export default App;
