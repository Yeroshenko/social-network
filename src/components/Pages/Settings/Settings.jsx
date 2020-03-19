import React from 'react'
import cn from 'classnames'

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

  const photoBlock = (size, name) => {
    return (
      <div className={cls.avatarInner}>
        <Avatar url={profile.photos.large} size={size} />
        <p>{name}</p>
      </div>
    )
  }

  const section = (className, title, body) => (
    <div className={cn(className, cls.section)}>
      <h2 className={cls.sectionTitle}>{title}</h2>
      {body}
    </div>
  )

  if (!profile) return <Loader />

  return (
    <div className={cls.settings}>
      <h1 className={cls.pageTitle}>Настройки</h1>

      {section(
        cls.avatar,
        'Аватарка',
        <>
          {photoBlock('15rem', 'Большая')}
          {photoBlock('7rem', 'Маленькая')}
          <input type='file' onChange={avatarSelected} />
        </>
      )}

      {section(
        cls.profileInfo,
        'Личная информация',
        <ProfileInfoForm
          onSubmit={onProfileSubmit}
          fullName={profile.fullName}
          aboutMe={profile.aboutMe}
          lookingForAJob={profile.lookingForAJob}
          lookingForAJobDescription={profile.lookingForAJobDescription}
        />
      )}
      {section(
        cls.socialLinks,
        'Социальные сети',
        <ContactsForm
          contacts={profile.contacts}
          onSubmit={onContactsSubmit}
          initialValues={{ ...profile.contacts }}
        />
      )}
    </div>
  )
}

export default Settings
