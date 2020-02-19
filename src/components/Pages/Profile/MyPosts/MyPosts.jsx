import React from 'react'

import Post from './Post/Post'

import cls from './MyPosts.module.sass'

const MyPosts = props => {
  const postElements =
    props.postsData &&
    props.postsData.map((post, index) => {
      return (
        <Post message={post.message} likesCount={post.likesCount} key={index} />
      )
    })

  const newPostElement = React.createRef()

  const addPost = () => {
    props.addPost()
  }

  const onPostChange = () => {
    const text = newPostElement.current.value
    props.updateNewPostText(text)

  }

  return (
    <div>
      My posts
      <div>
        <textarea
          ref={newPostElement}
          onChange={onPostChange}
          value={props.newPostText}
        />
        <button onClick={addPost}>Add post</button>
      </div>
      <div className={cls.posts}>{postElements}</div>
    </div>
  )
}

export default MyPosts
