import React from 'react'
import { NavLink } from 'react-router-dom'

import cls from './Dialogs.module.sass'

const DialogItem = ({ name, id }) => {
  return (
    <div className={cls.dialog}>
      <NavLink to={`/dialogs/${id}`} activeClassName={cls.active}>
        {name}
      </NavLink>
    </div>
  )
}

const Message = ({ message }) => {
  return(
    <div className={cls.message}>{message}</div>
  )
}

const Dialogs = () => {
  return (
    <div className={cls.dialogs}>
      <div className={cls.dialogsItems}>
        <DialogItem name='Name' id='1' />
        <DialogItem name='Namee' id='2' />
        <DialogItem name='Nameee' id='3' />
        <DialogItem name='Nameeee' id='4' />
      </div>
      <div className={cls.messages}>
        <Message message = 'Hi!' />
        <Message message = 'Whats Upppp' />
        <Message message = 'Yoooooooooou' />
      </div>
    </div>
  )
}

export default Dialogs
