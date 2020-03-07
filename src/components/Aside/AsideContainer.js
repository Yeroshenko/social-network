import { connect } from 'react-redux'

import { logout } from '../../redux/auth-reducer'

import Aside from './Aside'


const mapStateToProps = state => {
  return {
    data: state.asidePage,
    isAuth: state.auth.isAuth
  }
}

const AsideContainer = connect(mapStateToProps, { logout })(Aside)

export default AsideContainer
