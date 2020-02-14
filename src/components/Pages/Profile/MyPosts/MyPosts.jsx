import React from 'react'

import Post from './Post/Post'

import cls from './MyPosts.module.sass'

const MyPosts = ({ postData }) => {

  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div className={cls.posts}>
        {postData &&
          postData.map((post, index) => {
            return (
              <Post
                message={post.message}
                likesCount={post.likesCount}
                key={index}
              />
            )
          })}
      </div>
    </div>
  )
}

export default MyPosts
