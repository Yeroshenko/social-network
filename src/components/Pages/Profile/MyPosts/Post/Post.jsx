import React from 'react'

import Avatar from '../../../../Ui/Avatar/Avatar'

import cls from './Post.module.sass'

const deleteIcon = (
  <svg viewBox='0 0 20 20'>
    <path
      d='M10,20C4.477,20,0,15.523,0,10C0,4.478,4.477,0,10,0C15.522,0,20,4.478,20,10C20,15.523,15.522,20,10,20z M10,2c-4.418,0-8,3.582-8,8c0,4.418,3.582,8,8,8s8-3.582,8-8
        C18,5.582,14.418,2,10,2z M12.662,13.994L10,11.332l-2.662,2.662l-1.331-1.33l2.662-2.663L6.007,7.339l1.331-1.331L10,8.67l2.662-2.662l1.331,1.331l-2.662,2.662l2.662,2.663L12.662,13.994z'
    ></path>
  </svg>
)

const Post = ({ message, autor, deletePost, id }) => {
  return (
    <div className={cls.post}>
      <div className={cls.autor}>
        <Avatar size={'7rem'} />
        <p>{autor}</p>
        <div onClick={() => deletePost(id)} className={cls.deleteIcon}>
          {deleteIcon}
        </div>
      </div>
      <p className={cls.postText}>{message}</p>
    </div>
  )
}

export default Post
