import React, { useContext } from 'react'
import { AuthContext } from '../../auth/authContext'

import { types } from '../../types/types';

export const LoginScreen = ({ history}) => {
  const {user, dispatch} = useContext(AuthContext);


  console.log(user)
  // document.body.style = "padding: 70px;"
  const handleLogin = () => {
    
    dispatch({
      type: types.login,
      payload: { name: 'Alejandro'}
    })
    // history.replace('/');
    // history.push('/')
    
    history.replace('/');
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
