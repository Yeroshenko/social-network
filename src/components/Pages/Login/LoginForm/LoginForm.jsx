import React from 'react'
import { reduxForm, Field } from 'redux-form'

import { Button, Input } from '../../../Ui'

import { required } from '../../../../utils/validators/validators'


const LoginForm = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <Field
        component={Input}
        type='text'
        name='login'
        placeholder='Login'
        validate={[required]}
      />
      <Field
        component={Input}
        type='password'
        name='password'
        placeholder='Password'
        validate={[required]}
      />
      <label>
        <Field type='checkbox' name='rememberMe' component='input' />
        remember me
      </label>
      <Button>Login</Button>
    </form>
  )
}

export default reduxForm({ form: 'login' })(LoginForm)
