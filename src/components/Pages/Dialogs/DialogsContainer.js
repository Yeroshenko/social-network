import { compose } from 'redux'
import { connect } from 'react-redux'

import { updateNewMessageBody, sendMessage } from '../../../redux/dialogs-reducer'
import { withAuthRedirect } from '../../../hoc/withAuthRedirect'

import Dialogs from './Dialogs'


const mapStateToProps = state => {
  return {
    dialogsPage: state.dialogsPage
  }
}

export default compose(
  connect(mapStateToProps, { sendMessage, updateNewMessageBody }),
  withAuthRedirect
)(Dialogs)
