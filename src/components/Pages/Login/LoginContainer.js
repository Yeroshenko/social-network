import { connect } from 'react-redux'
import { login } from '../../../redux/auth-reducer'

import Login from './Login'

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth
  }
}

const LoginContainer = connect(mapStateToProps, { login })(Login) 

export default LoginContainer