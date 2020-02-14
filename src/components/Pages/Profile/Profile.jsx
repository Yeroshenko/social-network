import React from 'react'

import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'

import cls from './Profile.module.sass'

const Profile = ({ data }) => {
  return (
    <div className={cls.profile}>
      <ProfileInfo />
      <MyPosts postsData={data.posts} />
    </div>
  )
}

export default Profile
