import React from 'react'
import { Redirect } from 'react-router-dom'

import LoginForm from './LoginForm/LoginForm'

const Login = ({ login, isAuth }) => {
  
  const onSubmit = ({ email, password, rememberMe }) => {
    login(email, password, rememberMe)
  }

  if (isAuth) return <Redirect to='/profile' />

  return (
    <div>
      <h1>Login</h1>
      <LoginForm onSubmit={onSubmit} />
    </div>
  )
}

export default Login
