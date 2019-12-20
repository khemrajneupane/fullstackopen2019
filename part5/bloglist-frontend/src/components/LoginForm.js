import React from 'react'
export const Input = ({ text, inputValue, handler }) => {
    return (
        <div>
            {text}: <input value={inputValue} onChange={handler} />
        </div>
    )
}
const Button = ({ type, text }) => {
    return <button type={type}>{text}</button>
}

const LoginForm = ({
    onSubmit,
    handleUsernameChange,
    handlePasswordChange,
    username,
    password
}) => {
    return (
        <div>
            <p>Login to application</p>

            <form onSubmit={onSubmit}>
                <Input
                    text="username"
                    inputValue={username}
                    handler={handleUsernameChange}
                />
                <Input
                    text="password"
                    inputValue={password}
                    handler={handlePasswordChange}
                />
                <Button type="submit" text="submit" />
            </form>
        </div>
    )
}
export default LoginForm
