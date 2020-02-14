import React from 'react'

import Post from './Post/Post'

import cls from './MyPosts.module.sass'

const MyPosts = ({ postsData }) => {
  const postElements =
    postsData &&
    postsData.map((post, index) => {
      return (
        <Post message={post.message} likesCount={post.likesCount} key={index} />
      )
    })

  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div className={cls.posts}>{postElements}</div>
    </div>
  )
}

export default MyPosts
