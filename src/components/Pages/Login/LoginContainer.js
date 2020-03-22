import { connect } from 'react-redux'
import { login } from '../../../redux/auth-reducer'

import Login from './Login'

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
  }
}

export default connect(mapStateToProps, { login })(Login) 