import React from 'react'
import { reduxForm, Field, reset } from 'redux-form'

import { Textarea, Button } from '../../../Ui'

import { required } from '../../../../utils/validators/validators'

const DialogsForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        name='newMessageBody'
        type='text'
        component={Textarea}
        rows='4'
        validate={[required]}
        label='Написать сообщение...'
      />
      <Button>Отправить</Button>
    </form>
  )
}

const clearForm = (result, dispatch) => dispatch(reset('dialog'))

export default reduxForm({ form: 'dialog', onSubmitSuccess: clearForm })(
  DialogsForm
)
