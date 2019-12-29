import React from 'react'
import {useField} from '../hooks/index'

export const Button = ({ type, text,onClick }) => <button type={type} onClick={onClick}>{text}</button>

const LoginForm = ({onSubmit}) => {
    const usernameValue = useField("username");
    const passwordValue = useField("password");

    const handleSubmit = e => {
        e.preventDefault()
        onSubmit({
          username: usernameValue.value,
          password: passwordValue.value
        })
      }    
  
    return (
        <div>
            <p data-testid="login" >Login to application</p>

            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input {...usernameValue} reset="" />
                <br />
                <label htmlFor="password">Password</label>
                <input {...passwordValue} reset="" />
                <br />
                <Button type="submit" text="Login"/>
            </form>
        </div>
    )
}
export default LoginForm
