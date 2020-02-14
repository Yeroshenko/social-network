import React from 'react'

import cls from './Header.module.sass'

import logoSvg from '../../assets/icons/logo.svg'

const Header = () => {
  return (
    <header className={cls.header}>
      <img
        className={cls.logo}
        src={logoSvg}
        alt='logo'
      />
      <p className={cls.name}>SOCIAL NETWORK</p>
    </header>
  )
}

export default Header
