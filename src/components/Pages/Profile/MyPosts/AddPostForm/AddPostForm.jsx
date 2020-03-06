import React from 'react'
import { Field, reduxForm } from 'redux-form'

import { Textarea, Button } from '../../../../Ui'

import { maxLength, required } from '../../../../../utils/validators/validators'

const maxLength10 = maxLength(10)

const AddPostForm = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <Field
        component={Textarea}
        name='newPost'
        rows='10'
        placeholder='Излагайте свои мысли господа...'
        validate={[required, maxLength10]}
      />
      <Button>Add post</Button>
    </form>
  )
}

export default reduxForm({ form: 'myPosts' })(AddPostForm)
