import { connect } from 'react-redux'

import { logout } from '../../redux/auth-reducer'

import Aside from './Aside'


const mapStateToProps = state => {
  return {
    data: state.asidePage,
    isAuth: state.auth.isAuth
  }
}

export default connect(mapStateToProps, { logout })(Aside)
