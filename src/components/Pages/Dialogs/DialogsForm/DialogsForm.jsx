import React from 'react'
import { reduxForm, reset } from 'redux-form'

import { required } from '../../../../utils/validators/validators'
import { createField } from '../../../Ui/FormControls/FormControls'

import { Textarea, Button } from '../../../Ui'


const DialogsForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      {createField(
        Textarea, 'newMessageBody', 'Написать сообщение...', null, [required], { rows: '4' } 
      )}
      <Button>Отправить</Button>
    </form>
  )
}

const clearForm = (result, dispatch) => dispatch(reset('dialog'))

export default reduxForm({ form: 'dialog', onSubmitSuccess: clearForm })(
  DialogsForm
)
