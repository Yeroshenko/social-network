import React, { useEffect } from 'react'
import { reduxForm } from 'redux-form'

import { isUrl } from '../../../../utils/validators/validators'
import { createField } from '../../../Ui/FormControls/FormControls'

import { Input, Button } from '../../../Ui'

import cls from './SettingsForms.module.sass'

const ContactsForm = ({ contacts, handleSubmit, ...props }) => {
  // useEffect(() => {
  //   props.initialize({ ...contacts })
  // }, [])

  return (
    <form onSubmit={handleSubmit}>
      {Object.keys(contacts).map(key => {
        return (
          <div className={cls.inputWrapper} key={key}>
            <p className={cls.inputName}>{key}</p>
            {createField(Input, key, null, key, [isUrl])}
          </div>
        )
      })}

      <Button className={cls.submitButton}>Обновить</Button>
    </form>
  )
}

export default reduxForm({ form: 'socialLinks' })(ContactsForm)
