import React from 'react'

export const LoginScreen = ({ history }) => {
  // document.body.style = "padding: 70px;"
  const handleLogin = () => {
    history.replace('/')
    // history.push('/')
  }
  return (
    <div>
      <h1>LoginScreen</h1>
      <hr />

      <button
        className= "btn btn-primary"
        onClick={handleLogin}
      >
        login
      </button>
    </div>
  )
}
