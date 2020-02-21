import React from 'react'

import {
  addPostActionCreator,
  updateNewPostTextActionCretor
} from '../../../../redux/profile-reducer'

import MyPosts from './MyPosts'

const MyPostsContainer = ({ store }) => {

  const state = store.getState()

  const addPost = () => {
    store.dispatch(addPostActionCreator())
  }

  const onPostChange = text => {
    const action = updateNewPostTextActionCretor(text)
    store.dispatch(action)
  }

  return (
    <MyPosts
      updateNewPostText={onPostChange}
      addPost={addPost}
      newPostText={state.profilePage.newPostText}
      posts={state.profilePage.posts}
    />
  )
}

export default MyPostsContainer
