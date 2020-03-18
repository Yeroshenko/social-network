import React, { useEffect } from 'react'
import { reduxForm, Field, reset } from 'redux-form'

import { Input } from '../../../Ui'

import cls from './SettingsForm.module.sass'

const SettingsForm = ({ contacts, handleSubmit, ...props }) => {
  useEffect(() => {
    props.initialize({ ...contacts })
  }, [])

  return (
    <form onSubmit={handleSubmit}>
      {Object.keys(contacts).map(key => {
        return (
          <div className={cls.inputWrapper} key={key}>
            <p className={cls.inputName}>{key}</p>
            <Field component={Input} name={key} placeholder={key} />
          </div>
        )
      })}
    </form>
  )
}

const clearForm = (result, dispatch) => dispatch(reset('settings'))

export default reduxForm({ form: 'settings', onSubmitSuccess: clearForm })(
  SettingsForm
)
