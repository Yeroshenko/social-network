import React, { useEffect } from 'react'
import { reduxForm, Field } from 'redux-form'
import cn from 'classnames'

import { isUrl } from '../../../../utils/validators/validators'

import { Input, Button } from '../../../Ui'

import cls from './SettingsForms.module.sass'

const ContactsForm = ({ contacts, handleSubmit, ...props }) => {
  useEffect(() => {
    props.initialize({ ...contacts })
  }, [])

  return (
    <form onSubmit={handleSubmit}>
      {Object.keys(contacts).map(key => {
        return (
          <div className={cls.inputWrapper} key={key}>
            <p className={cls.inputName}>{key}</p>
            <Field
              component={Input}
              name={key}
              placeholder={key}
              validate={[isUrl]}
            />
          </div>
        )
      })}

      <Button>Обновить</Button>
    </form>
  )
}

export default reduxForm({ form: 'socialLinks' })(ContactsForm)
