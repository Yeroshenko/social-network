import React from 'react'
import { reduxForm, reset } from 'redux-form'

import { createField } from '../../../../Ui/FormControls/FormControls'
import { maxLength, required } from '../../../../../utils/validators/validators'

import { Textarea, Button } from '../../../../Ui'

import cls from './AddPostForm.module.sass'

const maxLength1000 = maxLength(1000)

const AddPostForm = ({ handleSubmit }) => {
  return (
    <form className={cls.addPostForm} onSubmit={handleSubmit}>
      {createField( 
        Textarea, 'newPost', 'Излагайте свои мысли господа...', null, [required, maxLength1000], { rows: '10' }
      )}
      <Button>Опубликовать</Button>
    </form>
  )
}

const clearForm = (result, dispatch) => dispatch(reset('myPosts'))

export default reduxForm({ form: 'myPosts', onSubmitSuccess: clearForm })(
  AddPostForm
)
