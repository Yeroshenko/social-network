import React from 'react'
import { reduxForm, Field } from 'redux-form'

import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import { Button } from '../../Ui'

import cls from './Dialogs.module.sass'

const Dialogs = ({ dialogsPage, sendMessage }) => {
  const dialogsItems = dialogsPage.dialogs.map(dialog => {
    return <DialogItem name={dialog.name} id={dialog.id} key={dialog.id} />
  })

  const messagesItems = dialogsPage.messages.map(message => {
    return <Message message={message.message} key={message.id} />
  })

  const onSendMessage = formData => {
    sendMessage(formData.newMessageBody)
  }

  const AddMessageForm = props => {
    return (
      <form onSubmit={props.handleSubmit}>
        <Field
          name='newMessageBody'
          type='text'
          component='input'
          placeholder='Написать сообщение...'
        />
        <Button>Отправить</Button>
      </form>
    )
  }

  const AddMessageReduxForm = reduxForm({ form: 'dialog' })(AddMessageForm)

  return (
    <div className={cls.dialogs}>
      <div className={cls.dialogsItems}>{dialogsItems}</div>
      <div className={cls.messages}>
        <div>{messagesItems}</div>
        <AddMessageReduxForm onSubmit={onSendMessage} />
      </div>
    </div>
  )
}

export default Dialogs
