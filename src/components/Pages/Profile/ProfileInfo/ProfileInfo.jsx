import React from 'react'

import { Cover, User, Loader } from '../../../Ui'

import coverImg from '../../../../assets/img/user-wallpaper.jpg'

import cls from './ProfileInfo.module.sass'
import SocialLinks from '../../../Ui/SocialLinks/SocialLinks'

const ProfileInfo = ({ profileInfo }) => {

  if (!profileInfo) {
    return <Loader />
  }

  return (
    <div className={cls.profileInfo}>  
      <Cover coverImg={coverImg} addClass={cls.cover} />
      <User profile={profileInfo} addClass={cls.user} />
      <div className={cls.socialLinks}>
        <SocialLinks links={profileInfo.contacts}/>
      </div>
    </div>
  )
}

export default ProfileInfo
