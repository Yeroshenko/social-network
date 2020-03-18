import React from 'react'
import { Redirect } from 'react-router-dom'

import LoginForm from './LoginForm/LoginForm'

import cls from './Login.module.sass'

const Login = ({ login, isAuth }) => {
  
  const onSubmit = ({ email, password, rememberMe }) => {
    login(email, password, rememberMe)
  }

  if (isAuth) return <Redirect to='/profile' />

  return (
    <div className={cls.login}>
      <h1 className={cls.pageTitle}>Авторизация</h1>
      <LoginForm onSubmit={onSubmit} />
    </div>
  )
}

export default Login
