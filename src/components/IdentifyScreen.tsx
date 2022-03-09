import { Box, Center, Flex, Text } from '@chakra-ui/react';
import { useState } from 'react';

interface IdentifyScreenProps {
  length: number;
  digits: number[];
  isInvalid?: { message: string };
}

export function IdentifyScreen({
  length,
  digits,
  isInvalid,
}: IdentifyScreenProps) {
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
      {isInvalid && <Text color='red.500'>{isInvalid.message}</Text>}
    </Flex>
  );
}
