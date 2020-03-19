import React from 'react'

import { Cover, User } from '../../../Ui'
import SocialLinks from '../../../Ui/SocialLinks/SocialLinks'

import coverImg from '../../../../assets/img/user-wallpaper.jpg'
import cls from './ProfileInfo.module.sass'

const ProfileInfo = ({ profile, isOwner, status, updateStatus }) => {
  return (
    <div className={cls.profileInfo}>
      <Cover coverImg={coverImg} className={cls.cover} />
      <User
        className={cls.user}
        photo={profile.photos.large}
        name={profile.fullName}
        status={status}
        updateStatus={updateStatus}
        isEditable={!!isOwner}
      />
      <div className={cls.socialLinks}>
        <SocialLinks links={profile.contacts} />
      </div>
    </div>
  )
}

export default ProfileInfo
