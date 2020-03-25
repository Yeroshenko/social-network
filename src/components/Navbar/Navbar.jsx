import React from 'react'
import { NavLink } from 'react-router-dom'

import { Tooltip } from '../Ui'
import { loginIcon, profileIcon, settingsIcon, usersIcon, logoutIcon } from './icons'

import cls from './Navbar.module.sass'

const Navbar = ({ isAuth, logout }) => {
  return (
    <nav className={cls.navbar}>
      <ul className={cls.list}>
        {!isAuth && (
          <li>
            <Tooltip content='Войти'>
              <NavLink to='/' exact activeClassName={cls.active}>
                <div className={cls.listItem}>{loginIcon}</div>
              </NavLink>
            </Tooltip>
          </li>
        )}
        <li>
          <Tooltip content='Профиль'>
            <NavLink to='/profile' exact activeClassName={cls.active}>
              <div className={cls.listItem}>{profileIcon}</div>
            </NavLink>
          </Tooltip>
        </li>
        {/* <li>
          <Tooltip content='Диалоги'>
            <NavLink to='/dialogs' activeClassName={cls.active}>
              <div className={cls.listItem}>{dialogsIcon}</div>
            </NavLink>
          </Tooltip>
        </li> */}
        <li>
          <Tooltip content='Все пользователи'>
            <NavLink to='/users' activeClassName={cls.active}>
              <div className={cls.listItem}>{usersIcon}</div>
            </NavLink>
          </Tooltip>
        </li>
        <li>
          <Tooltip content='Настройки'>
            <NavLink to='/settings' activeClassName={cls.active}>
              <div className={cls.listItem}>{settingsIcon}</div>
            </NavLink>
          </Tooltip>
        </li>
        {isAuth && (
          <li>
            <Tooltip content='Выйти'>
              <div className={cls.listItem} onClick={logout}>
                {logoutIcon}
              </div>
            </Tooltip>
          </li>
        )}
      </ul>
    </nav>
  )
}

export default Navbar
