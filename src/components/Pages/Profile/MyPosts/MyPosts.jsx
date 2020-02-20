import React from 'react'

import {
  addPostActionCreator,
  updateNewPostTextActionCretor
} from '../../../../redux/profile-reducer'

import Post from './Post/Post'

import cls from './MyPosts.module.sass'

const MyPosts = ({ postsData, newPostText, dispatch }) => {
  const postElements =
    postsData &&
    postsData.map((post, index) => {
      return (
        <Post message={post.message} likesCount={post.likesCount} key={index} />
      )
    })

  const newPostElement = React.createRef()

  const addPost = () => {
    dispatch(addPostActionCreator())
  }

  const onPostChange = () => {
    const text = newPostElement.current.value
    dispatch(updateNewPostTextActionCretor(text))
  }

  return (
    <div>
      My posts
      <div>
        <textarea
          ref={newPostElement}
          onChange={onPostChange}
          value={newPostText}
        />
        <button onClick={addPost}>Add post</button>
      </div>
      <div className={cls.posts}>{postElements}</div>
    </div>
  )
}

export default MyPosts
