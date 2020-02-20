import React from 'react'

import {
  updateNewMessageBodyCretor,
  sendMessageCreator
} from '../../../redux/dialogs-reducer'

import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'

import cls from './Dialogs.module.sass'

const Dialogs = ({ state, dispatch }) => {
  const dialogsItems = state.dialogs.map(dialog => {
    return <DialogItem name={dialog.name} id={dialog.id} key={dialog.id} />
  })

  const messagesItems = state.messages.map(message => {
    return <Message message={message.message} key={message.id} />
  })

  const newMessageBody = state.newMessageBody

  const onNewMessageChange = e => {
    const text = e.target.value
    dispatch(updateNewMessageBodyCretor(text))
  }

  const onSendMessageClick = () => {
    dispatch(sendMessageCreator())
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
          <button onClick={onSendMessageClick}>Отправить</button>
        </div>
      </div>
    </div>
  )
}

export default Dialogs
