import React from 'react'

const Button = ({ logout, text }) => {
    return <button onClick={logout}>{text}</button>
}
const logout = () =>
    window.localStorage.removeItem('loggedUser')
        ? window.location.reload(true)
        : window.location.reload(false)

const LogOut = () => {
    return (
        <Button
            logout={() => {
                logout()
            }}
            text={'logout'}
        />
    )
}

export default LogOut
