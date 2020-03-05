import React from 'react'
import { reduxForm, Field } from 'redux-form'

import Post from './Post/Post'
import { Button } from '../../../Ui'

import cls from './MyPosts.module.sass'

const MyPosts = ({ posts, addPost }) => {
  const postElements = posts.map((post, index) => {
    return (
      <Post message={post.message} likesCount={post.likesCount} key={index} />
    )
  })

  const onAddPost = formData => {
    addPost(formData.newPost)
  }

  const AddPostForm = ({ handleSubmit }) => {
    return (
      <form onSubmit={handleSubmit}>
        <Field component='textarea' name='newPost' rows='10' />
        <Button>Add post</Button>
      </form>
    )
  }

  const AddPostReduxForm = reduxForm({ form: 'myPosts' })(AddPostForm)

  return (
    <div>
      <h2>My posts</h2>
      <AddPostReduxForm onSubmit={onAddPost} />
      <div className={cls.posts}>{postElements}</div>
    </div>
  )
}

export default MyPosts
