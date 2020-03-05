import React from 'react'

import MyPostsContainer from './MyPosts/MyPostsContainer'
import ProfileInfo from './ProfileInfo/ProfileInfo'

import cls from './Profile.module.sass'

const Profile = ({ profile, status, updateStatus}) => {
  return (
    <div className={cls.profile}>
      <ProfileInfo
        profile={profile}
        status={status}
        updateStatus={updateStatus}
      />
      <MyPostsContainer />
    </div>
  )
}

export default Profile
