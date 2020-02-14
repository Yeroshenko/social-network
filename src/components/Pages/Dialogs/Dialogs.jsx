import React from 'react'

import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'

import cls from './Dialogs.module.sass'


const Dialogs = ({ dialogsData, messagesData }) => {


  return (
    <div className={cls.dialogs}>
      <div className={cls.dialogsItems}>
        {dialogsData &&
          dialogsData.map(dialog => {
            return <DialogItem name={dialog.name} id={dialog.id} key={dialog.id} />
          })}
      </div>
      <div className={cls.messages}>
        {messagesData &&
          messagesData.map(message => {
            return <Message message={message.message} key={message.id} />
          })}
      </div>
    </div>
  )
}

export default Dialogs
