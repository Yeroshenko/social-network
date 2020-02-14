import React from 'react'

import cls from './ProfileInfo.module.sass'

import coverImg from '../../../../assets/img/user-wallpaper.jpg'

const ProfileInfo = () => {
  return (
    <div className={cls.profileInfo}>
      <img className={cls.cover} src={coverImg} alt='img' />
      <div>ava + Descr</div>
    </div>
  )
}

export default ProfileInfo
