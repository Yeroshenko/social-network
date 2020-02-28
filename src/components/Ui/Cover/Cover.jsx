import React from 'react'
import cn from 'classnames'

import cls from './Cover.module.sass'

const Cover = ({ coverImg, className }) => {
  return <img className={cn(cls.cover, className)} src={coverImg} alt='img' />
}

export default Cover
