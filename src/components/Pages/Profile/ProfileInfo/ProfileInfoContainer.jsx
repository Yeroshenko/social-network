import React from 'react'
import { connect } from 'react-redux'

import ProfileInfo from './ProfileInfo'

const mapStateToProps = state => {
  return {
    profileInfo: state.profilePage.profile
  }
}

const ProfileInfoContainer = connect(mapStateToProps)(ProfileInfo)

export default ProfileInfoContainer
