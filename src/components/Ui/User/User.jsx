import React from 'react'
import cn from 'classnames'

import Avatar from '../Avatar/Avatar'
import UserStatus from './UserStatus/UserStatus'

import cls from './User.module.sass'

const User = ({ photo, name, aboutMe, className, isEditable }) => {
  return (
    <div className={cn(cls.user, className)}>
      <Avatar url={photo} size={'15rem'} />

      <div className={cls.info}>
        <p className={cls.fullName}>{name}</p>

        <UserStatus status={aboutMe} isEditable={isEditable} />
      </div>
    </div>
  )
}

export default User
