import React from 'react'
import cn from 'classnames'

import './Button.sass'

const Button = ({ children, onClick, className, disabled, type }) => {

  const classes = cn('btn', className, type)

  return (
    <button onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  )
}

export default Button
