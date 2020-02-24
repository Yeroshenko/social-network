import React from 'react'

import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'

import cls from './Dialogs.module.sass'

const Dialogs = ({ dialogsPage, updateNewMessageBody, sendMessage }) => {
  
  const state = dialogsPage

  const dialogsItems = state.dialogs.map(dialog => {
    return <DialogItem name={dialog.name} id={dialog.id} key={dialog.id} />
  })

  const messagesItems = state.messages.map(message => {
    return <Message message={message.message} key={message.id} />
  })

  const newMessageBody = state.newMessageBody

  const onNewMessageChange = e => {
    const text = e.target.value
    updateNewMessageBody(text)
  }

  const onSendMessageClick = () => {
    sendMessage()
  }

  return (
    <div className={cls.dialogs}>
      <div className={cls.dialogsItems}>{dialogsItems}</div>
      <div className={cls.messages}>
        <div>{messagesItems}</div>
        <div>
          <textarea
            onChange={onNewMessageChange}
            value={newMessageBody}
            placeholder={'Написать сообщение...'}
          ></textarea>
        </div>
        <div>
          <button className={'btnPrimary'} onClick={onSendMessageClick}>
            Отправить
          </button>
        </div>
      </div>
    </div>
  )
}

export default Dialogs
