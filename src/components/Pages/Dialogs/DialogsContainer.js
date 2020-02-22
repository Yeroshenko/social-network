import { connect } from 'react-redux'

import {
  updateNewMessageBodyCretor,
  sendMessageCreator
} from '../../../redux/dialogs-reducer'

import Dialogs from './Dialogs'


const mapStateToProps = state => {
  return {
    dialogsPage: state.dialogsPage
  }
}

const mapDispatchToProps = dispatch => {
  return {
    sendMessage: () => {
      dispatch(sendMessageCreator())
    },
    updateNewMessageBody: text => {
      dispatch(updateNewMessageBodyCretor(text))
    }
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer
