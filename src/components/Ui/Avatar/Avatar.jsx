import React from 'react'

import cls from './Avatar.module.sass'

import userPhoto from '../../../assets/img/user.png'

const Avatar = ({ size, url }) => {

  return (
    <div className={cls.avatar} style={{height: size, width: size}}>
      <img src={url ? url : userPhoto} alt='avatar' />
    </div>
  )
}

export default Avatar
