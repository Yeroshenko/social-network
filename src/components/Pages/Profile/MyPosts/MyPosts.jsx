import React from 'react'

import Post from './Post/Post'

import cls from './MyPosts.module.sass'
import { Button } from '../../../Ui'

const MyPosts = ({ posts, newPostText, updateNewPostText, addPost }) => {
  const postElements =
    posts &&
    posts.map((post, index) => {
      return (
        <Post message={post.message} likesCount={post.likesCount} key={index} />
      )
    })

  const newPostElement = React.createRef()

  const onAddPost = () => {
    addPost()
  }

  const onPostChange = () => {
    const text = newPostElement.current.value
    updateNewPostText(text)
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
        <Button type='primary' onClick={onAddPost}>
          Add post
        </Button>
      </div>
      <div className={cls.posts}>{postElements}</div>
    </div>
  )
}

export default MyPosts
