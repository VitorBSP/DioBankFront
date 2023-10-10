import { Box, Center, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useNavigate, useParams } from 'react-router-dom';
import CardInfo from "../components/CardInfo";
import { useEffect, useState } from "react";
import { api } from "../api";


interface UserData {
    email: string
    password: string
    name: string
    balance: number
    id: string
}


const Conta = () => {

    const [userData, setUserData] = useState<null | UserData>();

    const params = useParams()
    console.log(params)

    useEffect(() => {
        const getData = async () => {
            const data: any | UserData = await api
            setUserData(data)
        }

        getData()
    }, [])


    console.log(userData)

    const actualData = new Date()
    console.log(actualData)

    const { id } = useParams()
    const navigate = useNavigate()

    console.log(useParams())

    if (userData && id !== userData?.id) {
        navigate('/')
    }
    return (
        <Center>
            <SimpleGrid columns={2} spacing={8} paddingTop={16}>
                <CardInfo mainContent={`Bem-vindo ${userData?.name}`} content={`${actualData.getDay()}/${actualData.getMonth()}/${actualData.getFullYear()} ${actualData.getHours()}:${actualData.getMinutes()}`} />
                {
                    userData === undefined || userData === null ?
                        (<Center>
                            <Spinner size='xl' />
                            <Spinner
                                thickness='4px'
                                speed='0.65s'
                                emptyColor='gray.200'
                                color='blue.500'
                                size='xl'
                            />
                        </Center>) :
                        (
                            <CardInfo mainContent={`Saldo`} content={`R$ ${userData?.balance}`} />
                        )
                }
                {/* <CardInfo text='Informações da Conta' /> */}
            </SimpleGrid>
        </Center>
    )
}

export default Conta;