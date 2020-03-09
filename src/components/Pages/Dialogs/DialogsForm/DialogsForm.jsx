import React from 'react'
import { reduxForm, Field } from 'redux-form'

import { Textarea, Button } from '../../../Ui'

import { required } from '../../../../utils/validators/validators'

const DialogsForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        name='newMessageBody'
        type='text'
        component={Textarea}
        rows='1'
        validate={[required]}
        placeholder='Написать сообщение...'
      />
      <Button>Отправить</Button>
    </form>
  )
}

export default reduxForm({ form: 'dialog' })(DialogsForm)