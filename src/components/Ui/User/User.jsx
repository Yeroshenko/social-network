import React from 'react'
import cn from 'classnames'

import Avatar from '../Avatar/Avatar'
import UserStatus from './UserStatus/UserStatusClass'

import cls from './User.module.sass'

const User = ({ photo, name, status, className, isEditable, updateStatus }) => {
  return (
    <div className={cn(cls.user, className)}>
      <Avatar url={photo} size={'15rem'} substrate />

      <div className={cls.info}>
        <p className={cls.fullName}>{name}</p>

        <UserStatus
          status={status}
          updateStatus={updateStatus}
          isEditable={isEditable}
        />
      </div>
    </div>
  )
}

export default User
