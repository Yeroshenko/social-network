import React from 'react'

import { Cover, User } from '../../../Ui'

import cls from './ProfileInfo.module.sass'

import coverImg from '../../../../assets/img/user-wallpaper.jpg'

const ProfileInfo = ({ profileInfo }) => {
  return (
    <div className={cls.profileInfo}>
      <Cover coverImg={coverImg} addClass={cls.cover} />
      <User profile={profileInfo} addClass={cls.user} />
    </div>
  )
}

export default ProfileInfo
