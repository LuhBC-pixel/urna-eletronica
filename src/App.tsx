import { Heading, Flex } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { Teclado } from './components/Teclado';
import dados from './dados.json';

import { IdentifyScreen } from './components/IdentifyScreen';
import { VoterScreen } from './components/VoterScreen';
import { EndScreen } from './components/EndScreen';
import { ReportScreen } from './components/ReportScreen';

function App() {
  const [currentVoter, setCurrentVoter] = useState<{
    id: number;
    nome: string;
  }>({
    id: 0,
    nome: '',
  });
  const [screenStep, setScreenStep] = useState<number>(1);
  const [isInvalidVoter, setIsInvalidVoter] = useState<
    { message: string } | undefined
  >(undefined);
  const [digits, setDigits] = useState<number[]>([]);
  const [maxLengthInput, setMaxLengthInput] = useState<number>(4);
  const [data, setData] = useState(dados);
  const [itemName, setItemName] = useState<string|undefined>(undefined);

  // carregando dados persistidos no carregamento da pagina
  useEffect(() => {
    const loadedData = localStorage.getItem('data');
    if (loadedData) {
      setData(JSON.parse(loadedData));
    }
  }, []);

  useEffect(() => {
    switch (screenStep) {
      case 1:
        setMaxLengthInput(4);
        break;
      case 2:
        setMaxLengthInput(2);
        break;
      case 3:
        setMaxLengthInput(3);
        break;
      case 4 :
          const updatedData = data;
          const voterIndex = data.eleitores.indexOf(currentVoter as any);
          updatedData.eleitores[voterIndex].alreadyVoted = true;
          setData(updatedData)
          localStorage.setItem('data', JSON.stringify(updatedData));
    }
  }, [screenStep]);

  useEffect(() => {
    if (screenStep === 2) {
      if (digits.length === maxLengthInput) {
        const itemExists = data.lanches.find(
          (snack) => snack.id === Number(digits.join(''))
        );
        if (itemExists) setItemName(itemExists.nome)
      } else {
        setItemName('')
      }
    }

    if (screenStep === 3) {
      if (digits.length === maxLengthInput) {
        const itemDrinkExists = data.bebidas.find(
          (drink) => drink.id === Number(digits.join(''))
        );
        if (itemDrinkExists) setItemName(itemDrinkExists.nome);
      } else {
        setItemName('')
      }
    }

  }, [digits]);

  const addDigit = (numero: number) => {
    if (digits.length < maxLengthInput) {
      setDigits((prevState) => [...prevState, numero]);
    }
  };

  const removeDigit = () => {
    setDigits((prevState) => prevState.slice(0, -1));
  };

  const submitValue = (event: React.MouseEvent) => {
    event.preventDefault();
    if (screenStep === 1) {
      const id = digits.join('');
      if (id === data.codigoFinalizacao) {
        setScreenStep(5);
        return;
      }
      const voterExists = data.eleitores.find(
        (eleitor) => eleitor.id === Number(id)
      );
      if (voterExists) {
        const voterIndex = data.eleitores.indexOf(voterExists);
        const updatedData = data;
        if (updatedData.eleitores[voterIndex].alreadyVoted === true) {
          setIsInvalidVoter({ message: 'Pessoa Já Votou' });
          clearDigits();
          return;
        }
        localStorage.setItem('data', JSON.stringify(updatedData));
        setData(updatedData);
        setCurrentVoter(voterExists);
        setScreenStep(2);
        setIsInvalidVoter(undefined);
        clearDigits();
      } else {
        setCurrentVoter({
          id: 0,
          nome: '',
        });
        setIsInvalidVoter({ message: 'Pessoa Não Identificada' });
        clearDigits();
      }
    } else if (screenStep === 2) {
      const snackId = digits.join('');
      const snackExists = data.lanches.find(
        (snack) => snack.id === Number(snackId)
      );
      if (snackExists) {
        const snackIndex = data.lanches.indexOf(snackExists);
        const updatedData = data;
        updatedData.lanches[snackIndex].quantidadeVotos++;
        localStorage.setItem('data', JSON.stringify(updatedData));
        setData(updatedData);
        setScreenStep(3);
        clearDigits();
      } else {
        clearDigits();
      }
    } else if (screenStep === 3) {
      const drinkId = digits.join('');
      const drinkExists = data.bebidas.find(
        (drink) => drink.id === Number(drinkId)
      );

      if (drinkExists) {
        const drinkIndex = data.bebidas.indexOf(drinkExists);
        const updatedData = data;
        updatedData.bebidas[drinkIndex].quantidadeVotos++;
        localStorage.setItem('data', JSON.stringify(updatedData));
        setData(updatedData);
        setScreenStep(4);
        clearDigits();
      } else {
        clearDigits();
      }
    } 
  };

  const clearDigits = () => {
    setDigits([]);
  };

  return (
    <Flex
      alignItems='center'
      justifyContent='center'
      flexDirection='column'
      gap={4}
      bg='gray.700'
      width='100%'
      height='100vh'
    >
      <Heading color='whiteAlpha.400'>Urna Eletrônica</Heading>

      <Flex
        maxWidth={700}
        alignItems='center'
        justifyContent='center'
        gap={4}
        bg='gray.700'
      >
        {screenStep === 1 && (
          <IdentifyScreen
            length={maxLengthInput}
            digits={digits}
            isInvalid={isInvalidVoter}
          />
        )}
        {screenStep === 2 && (
          <VoterScreen
            length={maxLengthInput}
            digits={digits}
            voter={currentVoter}
            itemName={itemName}
          />
        )}
        {screenStep === 3 && (
          <VoterScreen
            length={maxLengthInput}
            digits={digits}
            voter={currentVoter}
            itemName={itemName}
          />
        )}
        {screenStep === 4 && <EndScreen setScreenStep={setScreenStep} />}
        {screenStep === 5 && <ReportScreen data={data} />}
        <Teclado
          addDigit={addDigit}
          removeDigit={removeDigit}
          submitValue={submitValue}
          clearDigits={clearDigits}
          currentStep={screenStep}
          setScreenStep={setScreenStep}
        />
      </Flex>
    </Flex>
  );
}

export default App;
