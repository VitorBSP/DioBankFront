import { login_function } from "./login"
import { api } from '../api'

describe('login', () => {

    const mockAlert = jest.fn()
    window.alert = mockAlert
    interface userLogin {
        email: string
        password: string
    }

    const loginMock: userLogin = {
        email: 'vitor@pereira.com',
        password: '123456'
    }

    const loginMockErrado: userLogin = {
        email: 'vitorpereira3115',
        password: 'incorreta'
    }


    it('Deve exibir um alert com boas vindas', async () => {
        await login_function(loginMock)
        expect(mockAlert).toHaveBeenCalledWith(`Email: ${loginMock.email}, Password: ${loginMock.password}`)
    })

    it('Não deve exibir alert sem email', () => {
        login_function(loginMock)
        expect(mockAlert).not.toHaveBeenCalledWith('Bem vinda!')
    })

    it('Deve exibir um erro caso o email seja inválido', async () => {
        await login_function(loginMockErrado)
        expect(mockAlert).toHaveBeenCalledWith('Email inválido!')
    })
})