import { Center, Input, Box, Button } from '@chakra-ui/react';
import { login_function } from '../services/login';
import { ButtonLogin } from './Button/Button';
import { useEffect, useState } from 'react';
import { Alerta } from './Alert';
import { api } from '../api'

export const Card = () => {
  interface UserData {
    email: string
    password: string
    name: string
    balance: number
  }

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [userData, setUserData] = useState<null | UserData>();



  useEffect(() => {
    const getData = async () => {
      const data: any | UserData = await api
      setUserData(data)
    }

    getData()
  }, [])

  console.log(userData)

  const handleLogin = () => {
    login_function({ email, password });
    setShowAlert(true);
  };

  const closeAlert = () => {
    setShowAlert(false);
  };

  console.log(api)

  return (
    <Box minHeight='100vh' backgroundColor='#B9E6F6' padding='25px'>
      {/* {userData === null || userData === undefined ?
        <h2>Carregando informações...</h2> :
        <h2>Informações carregadas.</h2>} */}
      <Box backgroundColor='#FFFFFF' borderRadius='25px' padding='15px'>
        <Center>
          <h1>Faça o login</h1>
        </Center>
        {/* <Center>
          <h2>{userData?.name}  </h2>
        </Center> */}
        <Input
          placeholder="e-mail"
          type="email"
          onChange={(event) => setEmail(event.target.value)}
        />
        {/* <!-- Para verificar o que vem no evento é só dar console.log(event) --> */}
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
