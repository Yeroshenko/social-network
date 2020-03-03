import { connect } from 'react-redux'

import { updateNewMessageBody, sendMessage } from '../../../redux/dialogs-reducer'
import { withAuthRedirect } from '../../../hoc/withAuthRedirect'

import Dialogs from './Dialogs'


const mapStateToProps = state => {
  return {
    dialogsPage: state.dialogsPage
  }
}

const authRedirectComponent = withAuthRedirect(Dialogs)

export default connect(mapStateToProps, { sendMessage, updateNewMessageBody })(authRedirectComponent)
