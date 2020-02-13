import React from 'react'

import cls from './Profile.module.sass'

const Profile = () => {
  return (
    <div className={cls.content}>
      <img
        src='https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2019/12/clearspace-1/21503850-1-eng-GB/ClearSpace-1_pillars.jpg'
        alt='img'
      />
      <div></div>
    </div>
  )
}

export default Profile
