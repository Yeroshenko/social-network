import React from 'react'

import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'

import cls from './Profile.module.sass'

const Profile = ({ profilePage, addPost, updateNewPostText }) => {
  return (
    <div className={cls.profile}>
      <ProfileInfo profileInfo={profilePage.profile} />
      <MyPosts
        postsData={profilePage.posts}
        newPostText={profilePage.newPostText}
        updateNewPostText={updateNewPostText}
        addPost={addPost}
      />
    </div>
  )
}

export default Profile
