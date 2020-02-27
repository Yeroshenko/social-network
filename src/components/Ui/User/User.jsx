import React from 'react'
import cn from 'classnames'
import Avatar from '../Avatar/Avatar'

import cls from './User.module.sass'

const User = ({ profile, addClass }) => {
  return (
    <div className={cn(cls.user, addClass)}>
      <Avatar url={profile.photos.large} size={'15rem'} />

      <div className={cls.info}>
        <p className={cls.fullName}>{profile.fullName}</p>
        <p className={cls.aboutMe}>{profile.aboutMe}</p>
      </div>
    </div>
  )
}

export default User
