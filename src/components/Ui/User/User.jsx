import React from 'react'
import cn from 'classnames'
import Avatar from '../Avatar/Avatar'

import cls from './User.module.sass'


const User = ({ profile, addClass }) => {
  return (
    <div className={cn(cls.user, addClass)}>
      <Avatar id={profile.id} size={'12rem'} />

      <div className={cls.info}>
        <p className={cls.username}>{profile.name}</p>
        <a href={`https://${profile.site}`} className={cls.website}>
          {profile.site}
        </a>
      </div>
    </div>
  )
}

export default User
