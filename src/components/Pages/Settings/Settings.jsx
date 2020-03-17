import React from 'react'

import SettingsForm from './SettingsForm/SettingsForm'
import { Avatar, Loader, Input } from '../../Ui'

import cls from './Settings.module.sass'

const Settings = ({ profile, updatePhoto }) => {
  const avatarSelected = e => {
    updatePhoto(e.target.files[0])
  }

  if (!profile) return <Loader />

  return (
    <div className={cls.settings}>
      <h1>Настройки</h1>
      <div className={cls.avatar}>
        <h2>Аватар</h2>
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

      <div className={cls.contactInfo}>
        <h2>Личная информация</h2>
        <SettingsForm contacts={profile.contacts}/>
      </div>
    </div>
  )
}

export default Settings
