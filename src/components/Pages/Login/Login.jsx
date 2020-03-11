import React from 'react'
import { Redirect } from 'react-router-dom'

import cls from './login.module.sass'

import LoginForm from './LoginForm/LoginForm'

const Login = ({ login, isAuth }) => {
  
  const onSubmit = ({ email, password, rememberMe }) => {
    login(email, password, rememberMe)
  }

  if (isAuth) return <Redirect to='/profile' />

  return (
    <div className={cls.login}>
      <h1>Login</h1>
      <LoginForm onSubmit={onSubmit} />
    </div>
  )
}

export default Login
