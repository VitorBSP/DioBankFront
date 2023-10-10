import { api } from '../api'
interface userLogin {
    email: string
    password: string
}

export const login_function = async ({ email, password }: userLogin): Promise<void> => {
    const data: any = await api
    if (email !== data.email) {
        return alert('Email inválido!')
    }
    alert(`Email: ${email}, Password: ${password}`);
}   