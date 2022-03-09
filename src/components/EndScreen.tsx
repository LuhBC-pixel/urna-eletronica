import {Flex} from '@chakra-ui/react'

interface EndScreenProps {
	setScreenStep: (step: number) => void
}

export function EndScreen({setScreenStep}: EndScreenProps){
	setInterval(() => {
		setScreenStep(1)
	}, 3000)

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
		FIM
	</Flex>
	)
}