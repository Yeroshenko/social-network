import React from 'react'

import cls from './Post.module.sass'

const Post = ({ message, likesCount }) => {
  return (
    <div className={cls.item}>
      <img
        src='https://rat.in.ua/wp-content/uploads/2014/01/1873-Business-Cat.png'
        alt='ava'
      />
      {message}
      <div>{likesCount} лайков</div>
    </div>
  )
}

export default Post
