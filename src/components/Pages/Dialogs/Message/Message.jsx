import React from 'react'

import cls from './Message.module.sass'

const Message = ({ message }) => {
  return <div className={cls.message}>{message}</div>
}

export default Message
