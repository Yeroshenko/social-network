import React from 'react'
import { Redirect } from 'react-router-dom'

import LoginForm from './LoginForm/LoginForm'

import cls from './Login.module.sass'

const Login = ({ login, isAuth, captchaUrl }) => {
  
  const onSubmit = ({ email, password, rememberMe, captcha }) => {
    login(email, password, rememberMe, captcha )
  }

  if (isAuth) return <Redirect to='/profile' />

  return (
    <div className={cls.login}>
      <h1 className={cls.pageTitle}>Авторизация</h1>
      <LoginForm onSubmit={onSubmit} captchaUrl={captchaUrl}/>
    </div>
  )
}

export default Login
