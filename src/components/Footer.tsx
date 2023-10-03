import { Box, Center, Text } from '@chakra-ui/react';

export const Footer = () => {
  return (
    <Box
      as="footer"
      backgroundColor="#333"
      color="white"
      textAlign="center"
      padding="4"
    >
      <Center>
        <Text>&copy; 2023 Vítor Pereira. Todos os direitos reservados.</Text>
      </Center>
    </Box>
  );
};