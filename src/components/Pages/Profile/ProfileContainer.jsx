import React, { PureComponent } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'

import {getUserProfile, getUserStatus, updateUserStatus } from '../../../redux/profile-reducer'
import { withAuthRedirect } from '../../../hoc/withAuthRedirect'

import Profile from './Profile'

class ProfileContainer extends PureComponent {
  
  refreshUser() {
    let userId = this.props.match.params.userId
    if (!userId) userId = this.props.authorizedUserId

    this.props.getUserProfile(userId)
    this.props.getUserStatus(userId)
  }
  
  componentDidMount() {
    this.refreshUser()
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.userId !== prevProps.match.params.userId) {
      this.refreshUser()
    }
  }

  render() {
    return (
      <Profile
        {...this.props}
        isOwner={!this.props.match.params.userId}
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
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
  }
}

export default compose(
  connect(mapStateToProps, { getUserProfile, getUserStatus, updateUserStatus }),
  withAuthRedirect
)(ProfileContainer)
