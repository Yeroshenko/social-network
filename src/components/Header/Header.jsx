import React from 'react'

import cls from './Header.module.sass'

const Header = () => {
  return (
    <header className={cls.header}>
      <img
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQd9yL2wt-AQmgnE2ZvTw1cNDPPFFpl9lLL-zp2E6UKo29_YGCT'
        alt='logo'
      />
    </header>
  )
}

export default Header
