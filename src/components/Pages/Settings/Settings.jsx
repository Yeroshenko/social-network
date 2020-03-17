import React from 'react'

import { Avatar, Loader } from '../../Ui'

import cls from './Settings.module.sass'

const Settings = ({ profile, updatePhoto }) => {

  const avatarSelected = (e) => {
    updatePhoto(e.target.files[0])
  }

  if (!profile) return <Loader />

  return (
    <div className={cls.settings}>
      <div className={cls.avatar}>
        <h2>Настроить аватар</h2>
        <div className={cls.avatarInner}>
          <Avatar url={profile.photos.large} size={'15rem'} />
          <p>Большая</p>
        </div>
        <div className={cls.avatarInner}>
          <Avatar url={profile.photos.large} size={'7rem'} />
          <p>Маленькая</p>
        </div>
        <input type='file' onChange={avatarSelected} />
      </div>
    </div>
  )
}

export default Settings
