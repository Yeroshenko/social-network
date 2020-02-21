import React from 'react'

import MyPostsContainer from './MyPosts/MyPostsContainer'
import ProfileInfo from './ProfileInfo/ProfileInfo'

import cls from './Profile.module.sass'

const Profile = ({ store }) => {
  return (
    <div className={cls.profile}>
      <ProfileInfo profileInfo={store.getState().profilePage.profile} />
      <MyPostsContainer store={store} />
    </div>
  )
}

export default Profile
