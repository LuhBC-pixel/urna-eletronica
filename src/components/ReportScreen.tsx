import { Flex, Text, Table, Thead, Tbody, Tr, Td, Th } from '@chakra-ui/react';
import dados from '../dados.json';

interface ReportScreenProps {
  data: typeof dados;
}

export function ReportScreen({ data }: ReportScreenProps) {
  let usersVoted = 0;

  data.eleitores.forEach((voter) => {
    if (voter.alreadyVoted) usersVoted++;
  });

  const drinksVoted = data.bebidas.reduce((acc, curr) => {
    return acc + curr.quantidadeVotos;
  }, 0);

  const snacksVoted = data.lanches.reduce((acc, curr) => {
    return acc + curr.quantidadeVotos;
  }, 0);

  const whiteVotes = usersVoted - drinksVoted + (usersVoted - snacksVoted);

  return (
    <Flex
      bg='white'
      h='100%' //oi oi
      width='100%'
      color='black'
      p='4'
      gap='2'
      alignItems='center'
      justifyContent='center'
      flexDirection='column'
    >
      <Flex flexDirection='column'>
        <Text>Total de Usuário que votaram: {usersVoted}</Text>
        <Table variant='striped' colorScheme='teal'>
          <Thead>
            <Tr>
              <Td>Lanches</Td>
              <Td isNumeric>Votos</Td>
            </Tr>
          </Thead>
          <Tbody>
            {data.lanches.map((lanche) => (
              <Tr key={lanche.nome}>
                <Td>{lanche.nome}</Td>
                <Td isNumeric>{lanche.quantidadeVotos}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
        <Table variant='striped' colorScheme='teal'>
          <Thead>
            <Tr>
              <Td>Bebidas</Td>
              <Td isNumeric>Votos</Td>
            </Tr>
          </Thead>
          <Tbody>
            {data.bebidas.map((bebida) => (
              <Tr key={bebida.nome}>
                <Td>{bebida.nome}</Td>
                <Td isNumeric>{bebida.quantidadeVotos}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
        <Table>
          <Thead>
            <Tr>
              <Td>Brancos/Nulos</Td>
              <Td>{whiteVotes}</Td>
            </Tr>
          </Thead>
        </Table>
      </Flex>
      <Flex></Flex>
    </Flex>
  );
}
