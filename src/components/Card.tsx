import { Center, Input, Box, Button } from '@chakra-ui/react';
import { login_function } from '../services/login';
import { ButtonLogin } from './Button/Button';
import { useState } from 'react';
import { Alerta } from './Alert';

export const Card = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showAlert, setShowAlert] = useState<boolean>(false);

  const handleLogin = () => {
    login_function({ email, password });
    setShowAlert(true);
  };

  const closeAlert = () => {
    setShowAlert(false);
  };

  return (
    <Box minHeight='100vh' backgroundColor='#B9E6F6' padding='25px'>
      <Box backgroundColor='#FFFFFF' borderRadius='25px' padding='15px'>
        <Center>
          <h1>Faça o login</h1>
        </Center>
        <Input
          placeholder="e-mail"
          type="email"
          onChange={(event) => setEmail(event.target.value)}
        />
        <Input
          placeholder="senha"
          type="password"
          onChange={(event) => setPassword(event.target.value)}
        />
        <Center>
          <ButtonLogin login_infos={handleLogin}> </ButtonLogin>
        </Center>
      </Box>
      {showAlert && (
        <Alerta
          email={email}
          password={password}
          onClose={closeAlert}
        />
      )}
    </Box>
  );
};
