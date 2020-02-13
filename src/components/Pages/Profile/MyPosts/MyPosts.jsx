import React from 'react'

import Post from './Post/Post'

import cls from './MyPosts.module.sass'

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div className={cls.posts}>
        <Post message={`Hi, hoe are you?`} />
        <Post message={`It's my first post`} />
      </div>
    </div>
  )
}

export default MyPosts
