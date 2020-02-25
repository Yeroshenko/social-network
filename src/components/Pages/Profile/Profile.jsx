import React from 'react'

import MyPostsContainer from './MyPosts/MyPostsContainer'
import ProfileInfoContainer from './ProfileInfo/ProfileInfoContainer'

import cls from './Profile.module.sass'

const Profile = () => {
  return (
    <div className={cls.profile}>
      <ProfileInfoContainer />
      <MyPostsContainer />
    </div>
  )
}

export default Profile
