import { Center } from '@chakra-ui/react';

interface TelaProps {
  dados: {
    id: number;
    nome: string;
    quantidadeVotos: number;
  }[];
}

export function Tela({ dados }: TelaProps) {
  return (
    <Center
      bg='white'
      h='100%'
      width='100%'
      color='black'
      margin={10}
      padding={10}
    >
      {dados.map((dado) => (
        <div key={dado.id}>
          <h1>{dado.nome}</h1>
          <h2>{dado.id}</h2>
        </div>
      ))}
    </Center>
  );
}
