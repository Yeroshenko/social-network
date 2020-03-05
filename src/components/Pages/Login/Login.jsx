import React from 'react'
import { reduxForm, Field } from 'redux-form'

import { Button } from '../../Ui'

const LoginForm = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <Field type='text' name='login' placeholder='Login' component='input' />
      <Field
        component='input'
        type='text'
        name='password'
        placeholder='Password'
      />
      <label>
        <Field type='checkbox' name='rememberMe' component='input' />
        remember me
      </label>
      <Button>Login</Button>
    </form>
  )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = () => {
  const onSubmit = formData => {
    console.log(formData)
  }

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  )
}

export default Login
