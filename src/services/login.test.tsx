import { login_function } from "./login"

describe('login', () => {

    const mockAlert = jest.fn()
    window.alert = mockAlert
    interface userLogin {
        email: string
        password: string
    }

    const loginMock: userLogin = {
        email: 'vitorpereira3115@gmail',
        password: 'oiiii'
    }


    it('Deve exibir um alert com boas vindas', () => {
        login_function(loginMock)
        expect(mockAlert).toHaveBeenCalledWith(`Email: ${loginMock.email}, Password: ${loginMock.password}`)
    })
})