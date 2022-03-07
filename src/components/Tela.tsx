import { Center } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import dados from '../dados.json';

interface TelaProps {
  valor: Number[];
}

export function Tela({ valor }: TelaProps) {
  const [eleitor, setEleitor] = useState(() => {
    const storangeEleicao = localStorage.getItem('eleitor');

    if (storangeEleicao) {
      return JSON.parse(storangeEleicao);
    }

    return [];
  });

  

  return (
    <Center
      bg='white'
      h='100%'
      width='100%'
      color='black'
      margin={10}
      padding={10}
    >
      {dados.eleitores.map((eleitor) => (
        <div key={eleitor.id}>
          <h1 style={{ marginRight: '1rem' }}>{eleitor.nome}</h1>
          <h1>{eleitor.id}</h1>
        </div>
      ))}

      <span
        style={{
          display: 'flex',
          justifyContent: 'end',
          alignContent: 'start',
        }}
      >
        Valor digitado: {valor}
      </span>
    </Center>
  );
}
