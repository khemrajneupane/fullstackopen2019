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

const LoginForm = (props) => {
    return (
        <div>
            <p data-testid="login" >Login to application</p>

            <form onSubmit={props.onSubmit}>
                <Input
                    text="username"
                    inputValue={props.username}
                    handler={props.handleUsernameChange}
                />
                <Input
                    text="password"
                    inputValue={props.password}
                    handler={props.handlePasswordChange}
                />
                <Button type="submit" text="submit" />
            </form>
        </div>
    )
}
export default LoginForm
