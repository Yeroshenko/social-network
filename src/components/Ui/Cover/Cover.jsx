import React from 'react'
import cn from 'classnames'

import cls from './Cover.module.sass'

const Cover = ({ coverImg, addClass }) => {
  return <img className={cn(cls.cover, addClass)} src={coverImg} alt='img' />
}

export default Cover
