import React from 'react'
import { NavLink } from 'react-router-dom'

import cls from './Navbar.module.sass'

const Navbar = () => {
  return (
    <nav className={cls.navbar}>
      <ul className={cls.list}>
        <li>
          <NavLink to='/profile' exact activeClassName={cls.active}>
            Профиль
          </NavLink>
        </li>
        <li>
          <NavLink to='/dialogs' activeClassName={cls.active}>
            Диалоги
          </NavLink>
        </li>
        <li>
          <NavLink to='/users' activeClassName={cls.active}>
            Пользователи
          </NavLink>
        </li>
        <li>
          <NavLink to='/news' activeClassName={cls.active}>
            Новости
          </NavLink>
        </li>
        <li>
          <NavLink to='/music' activeClassName={cls.active}>
            Музыка
          </NavLink>
        </li>
        <li>
          <NavLink to='/settings' activeClassName={cls.active}>
            Настройки
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
