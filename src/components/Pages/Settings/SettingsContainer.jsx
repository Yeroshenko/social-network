import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'

import { getUserProfile, updatePhoto, updateProfileInfo, updateContactsInfo } from '../../../redux/profile-reducer'
import { withAuthRedirect } from '../../../hoc/withAuthRedirect'

import Settings from './Settings'

class SettingsContainer extends PureComponent {
  componentDidMount() {
    const profileId = this.props.profileId
    this.props.getUserProfile(profileId)
  }

  render() {
    return (
      <Settings
        profile={this.props.profile}
        updatePhoto={this.props.updatePhoto}
        updateProfileInfo={this.props.updateProfileInfo}
        updateContactsInfo={this.props.updateContactsInfo}
      />
    )
  }
}

const mapStateToProps = state => {
  return {
    profileId: state.auth.userId,
    profile: state.profilePage.profile
  }
}

export default compose(
  connect(mapStateToProps, { getUserProfile, updatePhoto, updateProfileInfo, updateContactsInfo }),
  withAuthRedirect
)(SettingsContainer)
