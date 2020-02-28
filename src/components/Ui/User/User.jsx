import React from 'react'
import cn from 'classnames'
import Avatar from '../Avatar/Avatar'

import cls from './User.module.sass'

const User = ({ photo, name, aboutMe, className }) => {
  return (
    <div className={cn(cls.user, className)}>
      <Avatar url={photo} size={'15rem'} />

      <div className={cls.info}>
        <p className={cls.fullName}>{name}</p>
        <p className={cls.aboutMe}>{aboutMe ? aboutMe : 'Я ещё не придумал 🙄'}</p>
      </div>
    </div>
  )
}

export default User
