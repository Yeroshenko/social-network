import React, { Component } from 'react'
import { connect } from 'react-redux'

import { setAuthUserData } from '../../redux/auth-reducer'

import Navbar from './Navbar'
import { authApi } from '../../api/api'

class NavbarContainer extends Component {
  componentDidMount() {
    authApi.auth()
      .then(response => {
        if (response.data.resultCode === 0 ) {
          const {id, login, email} = response.data.data
          
          this.props.setAuthUserData(id, login, email)
        }
      })
  }

  render() {
    return <Navbar {...this.props} />
  } 
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {setAuthUserData})(NavbarContainer) 