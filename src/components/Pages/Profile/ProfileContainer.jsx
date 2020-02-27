import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'

import { setUserProfile } from '../../../redux/profile-reducer'

import Profile from './Profile'

class ProfileContainer extends Component {
  baseUrl = 'https://social-network.samuraijs.com/api/1.0/'

  componentDidMount() {
    let userId = this.props.match.params.userId
    if (!userId) {
      userId = 2
    }
    axios.get(`${this.baseUrl}profile/${userId}`).then(response => {
      this.props.setUserProfile(response.data)
    })
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} />
  }
}

const mapStateToProps = state => {
  return {
    profile: state.profilePage.profile
  }
}

export default connect(mapStateToProps, { setUserProfile })(ProfileContainer)
