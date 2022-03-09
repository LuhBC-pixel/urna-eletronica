import { Center, Flex, Text } from '@chakra-ui/react';

interface VoterScreenProps {
  length: number;
  digits: number[];
  voter: {
    id: number;
    nome: string;
  };
	itemName?: string
}
export function VoterScreen({ length, digits, voter, itemName }: VoterScreenProps) {
  return (
    <Flex
      bg='white'
      h='100%'
      width='100%'
      color='black'
      p='4'
      gap='2'
      alignItems='center'
      justifyContent='center'
      flexDirection='column'
    >
      <Flex>
        <Text>{voter.nome}</Text>
        <Text>{voter.id}</Text>
      </Flex>
      <Flex m='4' gap='2' alignItems='center' justifyContent='center'>
        {digits.map((digit, index) => (
          <Flex
            alignItems='center'
            justifyContent='center'
            h='14'
            w='14'
            key={index}
            p='2'
            border='1px solid black'
          >
            {digit}
          </Flex>
        ))}
        {Array.from(Array(length - digits.length), (_, i) => (
          <Flex
            alignItems='center'
            justifyContent='center'
            h='14'
            w='14'
            key={i}
            p='2'
            border='1px solid black'
          />
        ))}
      </Flex>
			<Text color='black'>{itemName ?? 'sem item selecionado'}</Text>
    </Flex>
  );
}
