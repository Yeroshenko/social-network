import React from 'react'
import { reduxForm, Field } from 'redux-form'

import { Button, Input } from '../../../Ui'

import { required } from '../../../../utils/validators/validators'
import { FormError } from '../../../Ui/FormControls/FormControls'

const LoginForm = ({ handleSubmit, error }) => {
  return (
    <form onSubmit={handleSubmit}>
      <Field
        component={Input}
        type='text'
        name='email'
        placeholder='Email'
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
      {error && <FormError errorMessage={error} />}
      <Button>Login</Button>
    </form>
  )
}

export default reduxForm({ form: 'login' })(LoginForm)
