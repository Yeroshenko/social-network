import React from 'react'

import cls from './Aside.module.sass'
import Avatar from '../Ui/Avatar/Avatar'

const Aside = ({ data }) => {
  console.log(data.friends)

  const friendEl = data.friends.map(item => {
    return (
      <li>
        <Avatar size={'6rem'} />
      </li>
    )
  })

  return (
    <div className={cls.aside}>
      <ul>{friendEl}</ul>
    </div>
  )
}

export default Aside
