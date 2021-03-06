import React from 'react'
import { reduxForm } from 'redux-form'

import { Button, Input, Checkbox } from '../../../Ui'
import { FormError, createField } from '../../../Ui/FormControls/FormControls'

import { required, isEmail } from '../../../../utils/validators/validators'

import cls from './LoginForm.module.sass'

const LoginForm = ({ handleSubmit, error, captchaUrl = null }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className={cls.loginInput}>
        {createField(Input, 'email', 'Логин', null, [required, isEmail])}
      </div>
      <div className={cls.loginInput}>
        {createField(Input, 'password', 'Пароль', null, [required], {
          type: 'password'
        })}
      </div>

      <div className={cls.loginCheckbox}>
        {createField(Checkbox, 'rememberMe', 'Запомнить меня', null, null, {
          type: 'checkbox'
        })}
      </div>

      {captchaUrl && (
        <div className={cls.captcha}>
          <img src={captchaUrl} className={cls.captchaImg} alt='captcha' />
          {createField(Input, 'captcha', 'абракадабра', null, [required])}
        </div>
      )}

      {error && <FormError errorMessage={error} />}

      <div className={cls.loginBtn}>
        <Button>Войти</Button>
      </div>
    </form>
  )
}

export default reduxForm({ form: 'login' })(LoginForm)
