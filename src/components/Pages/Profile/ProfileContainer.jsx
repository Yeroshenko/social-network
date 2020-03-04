import React, { Component } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'

import { getUserProfile } from '../../../redux/profile-reducer'
import { withAuthRedirect } from '../../../hoc/withAuthRedirect'

import Profile from './Profile'

class ProfileContainer extends Component {
  componentDidMount() {
    let userId = this.props.match.params.userId
    if (!userId) userId = 2

    this.props.getUserProfile(userId)
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

export default compose(
  connect(mapStateToProps, { getUserProfile }),
  withAuthRedirect
)(ProfileContainer)

