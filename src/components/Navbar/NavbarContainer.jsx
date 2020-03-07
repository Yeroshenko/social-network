import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getAuthUserData } from '../../redux/auth-reducer'

import Navbar from './Navbar'

class NavbarContainer extends Component {
  componentDidMount() {
    this.props.getAuthUserData()
  }

  render() {
    return <Navbar {...this.props} />
  }
}

const mapStateToProps = state => ({
  isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { getAuthUserData })(NavbarContainer)
