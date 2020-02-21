import React from 'react'

import {
  updateNewMessageBodyCretor,
  sendMessageCreator
} from '../../../redux/dialogs-reducer'

import Dialogs from './Dialogs'

const DialogsContainer = ({ store }) => {
  const state = store.getState().dialogsPage

  const onNewMessageChange = text => {
    store.dispatch(updateNewMessageBodyCretor(text))
  }

  const onSendMessageClick = () => {
    store.dispatch(sendMessageCreator())
  }

  return (
    <Dialogs
      sendMessage={onSendMessageClick}
      updateNewMessageBody={onNewMessageChange}
      dialogsPage={state}
    />
  )
}

export default DialogsContainer
