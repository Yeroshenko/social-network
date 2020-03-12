import React from 'react'
import cn from 'classnames'

import cls from './Avatar.module.sass'

import userPhoto from '../../../assets/img/user.png'

const Avatar = ({ url, className, size = '6rem', substrate = true }) => {
  return (
    <div
      className={cn(cls.avatar, className)}
      style={{ height: size, width: size }}
    >
      <img
        src={url ? url : userPhoto}
        className={cn(substrate && cls.withSubs)}
        alt='avatar'
      />
    </div>
  )
}

export default Avatar
