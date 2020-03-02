import React, { Component } from 'react'
import { connect } from 'react-redux'

import { setUserProfile } from '../../../redux/profile-reducer'

import Profile from './Profile'

class ProfileContainer extends Component {
  componentDidMount() {
    let userId = this.props.match.params.userId
    if (!userId) userId = 2

    this.props.setUserProfile(userId)
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
