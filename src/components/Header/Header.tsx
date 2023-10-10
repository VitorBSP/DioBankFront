import {
  Heading,
  Text
} from '@chakra-ui/react'

export const Header = () => {
  return (
    <Heading display="flex" alignItems="center" bg='#6B46C1' color='#FFFFFF' justifyContent="center" bgGradient="linear(to-r, #268DCC, #54539D, #EA575F)">
      <img src='https://hermes.digitalinnovation.one/assets/diome/logo-full.svg' alt='logo DIO' />
      <Text fontSize='70px' ml={4}>Bank</Text>
    </Heading>
  )
}
