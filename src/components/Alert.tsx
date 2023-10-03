import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
    CloseButton,
} from '@chakra-ui/react';

interface AlertaProps {
    email: string;
    password: string;
    onClose: () => void;
}

export const Alerta = ({ email, password, onClose }: AlertaProps) => {
    return (
        <>
            <Alert
                status='success'
                variant='subtle'
                flexDirection='column'
                alignItems='center'
                justifyContent='center'
                textAlign='center'
                height='200px'
            >
                <AlertIcon boxSize='40px' mr={0} />
                <AlertTitle mt={4} mb={1} fontSize='lg'>
                    Cadastro Realizado!
                </AlertTitle>
                <AlertDescription maxWidth='sm'>
                    Obrigado pelo seu interesse.<br /> Seu email é : {email}, <br />  Sua senha é : {password}
                </AlertDescription>
                {/* Adicionando o CloseButton para fechar o alerta */}
                <CloseButton
                    position="absolute"
                    right={2}
                    top={2}
                    onClick={onClose}
                />
            </Alert>
        </>
    );
};
