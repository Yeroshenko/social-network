import React, { useEffect } from 'react'
import { reduxForm, Field } from 'redux-form'
import cn from 'classnames'

import { required } from '../../../../utils/validators/validators'

import { Input, Checkbox, Button, Textarea } from '../../../Ui'

import cls from './SettingsForms.module.sass'

const ProfileInfoForm = ({ fullName, lookingForAJob = false, lookingForAJobDescription, aboutMe, handleSubmit, ...props }) => {
  useEffect(() => {
    props.initialize({ fullName, lookingForAJob, lookingForAJobDescription, aboutMe })
    // debugger
  }, [])

  return (
    <form onSubmit={handleSubmit}>
      
      <div className={cls.inputWrapper}>
        <p className={cls.inputName}>Никнейм</p>
        <Field
          component={Input}
          name={'fullName'}
          placeholder={'Никнейм'}
          validate={[required]}
        />
      </div>

      <div className={cls.inputWrapper}>
        <p className={cls.inputName}>Обо мне</p>
        <Field
          component={Input}
          name={'aboutMe'}
          placeholder={'Обо мне'}
          validate={[required]}
          // max-length 40 
        />
      </div>

      <div className={cls.lookingForAJobDescription}>
        <p className={cls.inputName}>Професиональные навыки</p>
        <Field
          component={Input}
          name={'lookingForAJobDescription'}
          placeholder={'Професиональные навыки'}
          validate={[required]}
          // max-length 40 
        />
      </div>

      <div className={cls.checkbox}>
        <Field
          component={Checkbox}
          type='checkbox'
          name={'lookingForAJob'}
          label='В поисках роботы:'
          position='right'
        />
      </div>

      

      <Button>Обновить</Button>
    </form>
  )
}

export default reduxForm({ form: 'profileInfo' })(ProfileInfoForm)
