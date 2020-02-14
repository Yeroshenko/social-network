import React from 'react'

import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'

import cls from './Profile.module.sass'

const Profile = ({ postData }) => {
  return (
    <div className={cls.profile}>
      <ProfileInfo />
      <MyPosts postData={postData} />
    </div>
  )
}

export default Profile
