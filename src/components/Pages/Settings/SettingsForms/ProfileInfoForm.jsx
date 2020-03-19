import React, { useEffect } from 'react'
import { reduxForm } from 'redux-form'

import { required } from '../../../../utils/validators/validators'

import { Input, Checkbox, Button, } from '../../../Ui'

import cls from './SettingsForms.module.sass'
import { createField } from '../../../Ui/FormControls/FormControls'

const ProfileInfoForm = ({ fullName, lookingForAJob = false, lookingForAJobDescription, aboutMe, handleSubmit, ...props }) => {
  useEffect(() => {
    props.initialize({ fullName, lookingForAJob, lookingForAJobDescription, aboutMe })
  }, [])

  const inputWrapper = (text, input) => (
    <div className={cls.inputWrapper}>
      <p className={cls.inputName}>{text}</p>
      {input}
    </div>
  )

  return (
    <form onSubmit={handleSubmit}>
      {inputWrapper('Никнейм', createField(Input, 'fullName', null, 'Никнейм', [required]))}
      {inputWrapper('Обо мне', createField(Input, 'aboutMe', null, 'Обо мне', [required]))}
      {inputWrapper('Професиональные навыки', createField(Input, 'lookingForAJobDescription', null, 'Професиональные навыки', [required]))}

      <div className={cls.checkbox}>
        {createField(Checkbox, 'lookingForAJob', 'В поисках роботы:', null, null, {type: 'checkbox'}, 'right')}
      </div>
      <Button className={cls.submitButton}>Обновить</Button>
    </form>
  )
}

export default reduxForm({ form: 'profileInfo' })(ProfileInfoForm)
