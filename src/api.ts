const conta = {
    email: 'vitor@pereira.com',
    password: '123456',
    name: "Vítor Pereira",
    balance: 15000,
    id: '15'
}

export const api = new Promise((resolve => {
    setTimeout(() => {
        resolve(conta)
    }, 3000)
}))