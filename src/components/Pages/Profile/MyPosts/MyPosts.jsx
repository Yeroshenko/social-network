import React from 'react'

import Post from './Post/Post'
import AddPostForm from './AddPostForm/AddPostForm'

import cls from './MyPosts.module.sass'

const MyPosts = ({ posts, addPost, autor, deletePost }) => {
  const postElements = [...posts].reverse().map((post, index) => {
    return (
      <Post
        key={index}
        id={post.id}
        autor={autor}
        message={post.message}
        deletePost={deletePost}
      />
    )
  })

  const onAddPost = formData => addPost(formData.newPost)

  return (
    <div className={cls.myPosts}>
      <div className={cls.myPostsInner}>
        <h1>Мои записи</h1>
        <AddPostForm onSubmit={onAddPost} />
      </div>
      <div className={cls.posts}>{postElements}</div>
    </div>
  )
}

export default MyPosts
