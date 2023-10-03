import { Button } from '@chakra-ui/react';

export const ButtonLogin = (props: any) => {
    return (
        <Button onClick={props.login_infos}
            colorScheme='purple'
            size='sm' width='100%'
            marginTop='5px'
        >
            Entrar
        </Button>
    );
}