import { Button, SimpleGrid } from '@chakra-ui/react';

interface TecladoProps {
  addDigit: (digit: number) => void;
  removeDigit: () => void;
  submitValue: (event: React.MouseEvent) => void;
  clearDigits: () => void;
  currentStep: number;
  setScreenStep: (step: number) => void
}

export function Teclado({
  addDigit,
  removeDigit,
  submitValue,
  clearDigits,
  currentStep,
  setScreenStep
}: TecladoProps) {
  return (
    <div>
      <SimpleGrid columns={3} spacing='1' width='300px'>
        <Button
          colorScheme='gray'
          value='1'
          width='50px'
          onClick={() => addDigit(1)}
        >
          1
        </Button>
        <Button
          colorScheme='gray'
          value='2'
          width='50px'
          onClick={() => addDigit(2)}
        >
          2
        </Button>
        <Button
          colorScheme='gray'
          value='3'
          width='50px'
          onClick={() => addDigit(3)}
        >
          3
        </Button>
        <Button
          colorScheme='gray'
          value='4'
          width='50px'
          onClick={() => addDigit(4)}
        >
          4
        </Button>
        <Button
          colorScheme='gray'
          value='5'
          width='50px'
          onClick={() => addDigit(5)}
        >
          5
        </Button>
        <Button
          colorScheme='gray'
          value='6'
          width='50px'
          onClick={() => addDigit(6)}
        >
          6
        </Button>
        <Button
          colorScheme='gray'
          value='7'
          width='50px'
          onClick={() => addDigit(7)}
        >
          7
        </Button>
        <Button
          colorScheme='gray'
          value='8'
          width='50px'
          onClick={() => addDigit(8)}
        >
          8
        </Button>
        <Button
          colorScheme='gray'
          value='9'
          width='50px'
          onClick={() => addDigit(9)}
        >
          9
        </Button>
        <SimpleGrid mb='1rem'>
          <Button
            colorScheme='gray'
            width={100}
            value='0'
            onClick={() => addDigit(0)}
          >
            0
          </Button>
        </SimpleGrid>
      </SimpleGrid>
      <SimpleGrid columns={3} spacing='5'>
        {currentStep !== 1 && (
          <Button
            colorScheme='telegram'
            value='branco'
            onClick={() => setScreenStep(currentStep + 1)}
          >
            BRANCO
          </Button>
        )}
        <Button
          colorScheme='telegram'
          value='corrige'
          onClick={() => removeDigit()}
        >
          CORRIGE
        </Button>
        <Button
          colorScheme='telegram'
          value='confirma'
          p='2'
          type='submit'
          onClick={(e) => submitValue(e)}
        >
          CONFIRMA
        </Button>
      </SimpleGrid>
    </div>
  );
}
