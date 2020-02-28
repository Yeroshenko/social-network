import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'

import { setAuthUserData } from '../../redux/auth-reducer'

import Navbar from './Navbar'

class NavbarContainer extends Component {
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, { withCredentials: true })
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