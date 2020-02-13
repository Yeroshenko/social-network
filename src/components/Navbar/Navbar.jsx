import React from 'react'

import cls from './Navbar.module.sass'

const Navbar = () => {
  return (
    <nav className={cls.navbar}>
      <ul>
        <li>
          <a href='/'>Profile</a>
        </li>
        <li>
          <a href='/'>Message</a>
        </li>
        <li>
          <a href='/'>News</a>
        </li>
        <li>
          <a href='/'>Music</a>
        </li>
        <li>
          <a href='/'>Settings</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
