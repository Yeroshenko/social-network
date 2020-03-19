import React from 'react'

import { Avatar, Loader } from '../../Ui'
import ProfileInfoForm from './SettingsForms/ProfileInfoForm'
import ContactsForm from './SettingsForms/ContactsForm'

import cls from './Settings.module.sass'

const Settings = ({
  profile,
  updatePhoto,
  updateProfileInfo,
  updateContactsInfo
}) => {
  const avatarSelected = e => updatePhoto(e.target.files[0])

  const onProfileSubmit = formData => updateProfileInfo(formData)
  const onContactsSubmit = formData => updateContactsInfo(formData)

  const profileCopy = {...profile}

  if (!profile) return <Loader />

  debugger
  return (
    <div className={cls.settings}>
      <h1 className={cls.pageTitle}>Настройки</h1>

      <div className={cls.avatar}>
        <h2 className={cls.sectionTitle}>Аватар</h2>
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

      <div className={cls.profileInfo}>
        <h2 className={cls.sectionTitle}>Личная информация</h2>
        <ProfileInfoForm
          onSubmit={onProfileSubmit}
          fullName={profile.fullName}
          aboutMe={profile.aboutMe}
          lookingForAJob={profile.lookingForAJob}
          lookingForAJobDescription={profile.lookingForAJobDescription}
        />
      </div>

      <div className={cls.socialLinks}>
        <h2>Социальные сети</h2>
        <ContactsForm contacts={profileCopy.contacts} onSubmit={onContactsSubmit} />
      </div>
    </div>
  )
}

export default Settings
