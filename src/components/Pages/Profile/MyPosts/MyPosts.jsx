import React from 'react'

import Post from './Post/Post'
import AddPostForm from './AddPostForm/AddPostForm'

import cls from './MyPosts.module.sass'

const MyPosts = ({ posts, addPost }) => {
  const postElements = [...posts].reverse().map((post, index) => {
    return (
      <Post message={post.message} likesCount={post.likesCount}  key={index} />
    )
  })

  const onAddPost = formData => {
    addPost(formData.newPost)
  }

  return (
    <div className={cls.myPosts}>
      <h2>My posts</h2>
      <AddPostForm onSubmit={onAddPost} />
      <div className={cls.posts}>{postElements}</div>
    </div>
  )
}

export default MyPosts
