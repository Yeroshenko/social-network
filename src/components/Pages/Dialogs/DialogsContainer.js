import { connect } from 'react-redux'

import { updateNewMessageBodyAC, sendMessageAC } from '../../../redux/dialogs-reducer'

import Dialogs from './Dialogs'

const mapStateToProps = state => {
  return {
    dialogsPage: state.dialogsPage
  }
}

const mapDispatchToProps = dispatch => {
  return {
    sendMessage: () => {
      dispatch(sendMessageAC())
    },
    updateNewMessageBody: text => {
      dispatch(updateNewMessageBodyAC(text))
    }
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer
