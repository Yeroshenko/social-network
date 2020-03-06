import React from 'react'

import DialogsForm from './DialogsForm/DialogsForm'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'

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

  return (
    <div className={cls.dialogs}>
      <div className={cls.dialogsItems}>{dialogsItems}</div>
      <div className={cls.messages}>
        <div>{messagesItems}</div>
        <DialogsForm onSubmit={onSendMessage} />
      </div>
    </div>
  )
}

export default Dialogs
