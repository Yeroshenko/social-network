import React from 'react'

import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'

import cls from './Dialogs.module.sass'

const Dialogs = ({ data }) => {
  const dialogsItems = data.dialogs.map(dialog => {
    return <DialogItem name={dialog.name} id={dialog.id} key={dialog.id} />
  })

  const messagesItems = data.messages.map(message => {
    return <Message message={message.message} key={message.id} />
  })

  return (
    <div className={cls.dialogs}>
      <div className={cls.dialogsItems}>{dialogsItems}</div>
      <div className={cls.messages}>{messagesItems}</div>
    </div>
  )
}

export default Dialogs
