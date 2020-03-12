import React from 'react'
import { Field, reduxForm, reset } from 'redux-form'

import { Textarea, Button } from '../../../../Ui'

import { maxLength, required } from '../../../../../utils/validators/validators'

import cls from './AddPostForm.module.sass'

const maxLength1000 = maxLength(1000)

const AddPostForm = ({ handleSubmit }) => {
  return (
    <form className={cls.addPostForm} onSubmit={handleSubmit}>
      <Field
        component={Textarea}
        name='newPost'
        rows='10'
        label='Излагайте свои мысли господа...'
        validate={[required, maxLength1000]}
      />
      <Button>Опубликовать</Button>
    </form>
  )
}

const clearForm = (result, dispatch) => dispatch(reset('myPosts'))

export default reduxForm({ form: 'myPosts', onSubmitSuccess: clearForm })(
  AddPostForm
)
