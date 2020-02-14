import React from 'react'
import { NavLink } from 'react-router-dom'

import cls from './DialogItem.module.sass'

const DialogItem = ({ name, id }) => {
  return (
    <div className={cls.dialog}>
      <NavLink to={`/dialogs/${id}`} activeClassName={cls.active}>
        {name}
      </NavLink>
    </div>
  )
}

export default DialogItem
