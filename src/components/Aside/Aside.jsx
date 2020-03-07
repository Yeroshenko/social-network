import React from 'react'

import Avatar from '../Ui/Avatar/Avatar'
import { Button } from '../Ui'

import cls from './Aside.module.sass'

const Aside = ({ data, logout, isAuth }) => {
  const friendEl = data.friends.map((item, index) => {
    return (
      <li key={index}>
        <Avatar size={'6rem'} />
      </li>
    )
  })

  return (
    <div className={cls.aside}>
      <ul>{friendEl}</ul>
      {isAuth && (
        <Button type='secondary' className={cls.logoutBtn} onClick={logout}>
          L
        </Button>
      )}
    </div>
  )
}

export default Aside
