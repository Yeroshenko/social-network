import React, { Component } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'

import {
  getUserProfile,
  getUserStatus,
  updateUserStatus } from '../../../redux/profile-reducer'
import { withAuthRedirect } from '../../../hoc/withAuthRedirect'

import Profile from './Profile'

class ProfileContainer extends Component {
  componentDidMount() {
    let userId = this.props.match.params.userId
    if (!userId) userId = 5977

    this.props.getUserProfile(userId)
    this.props.getUserStatus(userId)
  }

  render() {
    return (
      <Profile
        {...this.props}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateUserStatus}
      />
    )
  }
}

const mapStateToProps = state => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status
  }
}

export default compose(
  connect(mapStateToProps, { getUserProfile, getUserStatus, updateUserStatus }),
  withAuthRedirect
)(ProfileContainer)
