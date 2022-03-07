import { Button, SimpleGrid } from '@chakra-ui/react';

interface TecladoProps {
  adicionarValor: (valor: number) => void;
  removerValor: () => void;
  enviarValor: (event: React.MouseEvent) => void;
}

export function Teclado({
  adicionarValor,
  removerValor,
  enviarValor,
}: TecladoProps) {
  return (
    <div
      style={{
        marginLeft: '10rem',
      }}
    >
      <SimpleGrid columns={3} spacing='1' width='275px'>
        <Button
          colorScheme='gray'
          value='1'
          width='50px'
          onClick={() => adicionarValor(1)}
        >
          1
        </Button>
        <Button
          colorScheme='gray'
          value='2'
          width='50px'
          onClick={() => adicionarValor(2)}
        >
          2
        </Button>
        <Button
          colorScheme='gray'
          value='3'
          width='50px'
          onClick={() => adicionarValor(3)}
        >
          3
        </Button>
        <Button
          colorScheme='gray'
          value='4'
          width='50px'
          onClick={() => adicionarValor(4)}
        >
          4
        </Button>
        <Button
          colorScheme='gray'
          value='5'
          width='50px'
          onClick={() => adicionarValor(5)}
        >
          5
        </Button>
        <Button
          colorScheme='gray'
          value='6'
          width='50px'
          onClick={() => adicionarValor(6)}
        >
          6
        </Button>
        <Button
          colorScheme='gray'
          value='7'
          width='50px'
          onClick={() => adicionarValor(7)}
        >
          7
        </Button>
        <Button
          colorScheme='gray'
          value='8'
          width='50px'
          onClick={() => adicionarValor(8)}
        >
          8
        </Button>
        <Button
          colorScheme='gray'
          value='9'
          width='50px'
          onClick={() => adicionarValor(9)}
        >
          9
        </Button>
        <SimpleGrid mb='1rem'>
          <Button
            colorScheme='gray'
            width={100}
            value='0'
            onClick={() => adicionarValor(0)}
          >
            0
          </Button>
        </SimpleGrid>
      </SimpleGrid>
      <SimpleGrid columns={3} spacing='5'>
        <Button colorScheme='telegram' value='branco' disabled>
          BRANCO
        </Button>
        <Button
          colorScheme='telegram'
          value='corrige'
          onClick={() => removerValor()}
        >
          CORRIGE
        </Button>
        <Button
          colorScheme='telegram'
          value='confirma'
          type='submit'
          onClick={(e) => enviarValor(e)}
        >
          CONFIRMA
        </Button>
      </SimpleGrid>
    </div>
  );
}
