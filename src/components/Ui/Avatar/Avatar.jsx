import React from 'react'

import cls from './Avatar.module.sass'

import user1 from '../../../assets/img/users/user1.jpg'

const Avatar = ({ size, id }) => {

  return (
    <div className={cls.avatar} style={{height: size, width: size}}>
      <img src={user1} alt='avatar' />
    </div>
  )
}

export default Avatar
