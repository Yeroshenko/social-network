import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import { logout } from '../../redux/auth-reducer'

import Navbar from './Navbar'

class NavbarContainer extends PureComponent {
  render() {
    return <Navbar {...this.props} />
  }
}

const mapStateToProps = state => ({
  isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { logout })(NavbarContainer)
