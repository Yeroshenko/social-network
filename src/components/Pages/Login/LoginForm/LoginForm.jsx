import React from 'react'
import { reduxForm, Field } from 'redux-form'

import { Button, Input, Checkbox } from '../../../Ui'
import { FormError } from '../../../Ui/FormControls/FormControls'

import { required, isEmail } from '../../../../utils/validators/validators'

import cls from './LoginForm.module.sass'

const LoginForm = ({ handleSubmit, error }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className={cls.loginInput}>
        <Field
          component={Input}
          type='text'
          name='email'
          label='Логин'
          validate={[required, isEmail]}
          className={cls.loginInput}
        />
      </div>
      <div className={cls.loginInput}>
        <Field
          component={Input}
          type='password'
          name='password'
          label='Пароль'
          validate={[required]}
        />
      </div>

      <div className={cls.loginCheckbox}>
        <Field
          component={Checkbox}
          type='checkbox'
          name='rememberMe'
          label={'Запомнить меня'}
        />
      </div>
      {error && <FormError errorMessage={error} />}
      <div className={cls.loginBtn}>
        <Button>Войти</Button>
      </div>
    </form>
  )
}

export default reduxForm({ form: 'login' })(LoginForm)
