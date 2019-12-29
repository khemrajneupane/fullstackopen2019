import React from 'react'
import {Button} from '../components/LoginForm'

const logout = () =>
    window.localStorage.removeItem('loggedUser')
        ? window.location.reload(true)
        : window.location.reload(false)

const LogOut = () => <Button onClick={() => logout()} text='logout'/>


export default LogOut
