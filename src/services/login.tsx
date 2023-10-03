interface userLogin {
    email: string
    password: string
}

export const login_function = ({ email, password }: userLogin): void => {
    alert(`Email: ${email}, Password: ${password}`);
}