import React from 'react'
import cn from 'classnames'

import cls from './Checkbox.module.sass'

const Checkbox = ({ input, label, meta, position = 'left', ...props }) => {

  let direction
  switch (position) {
    case 'right':
      direction = cls.right
      break
    default:
      direction = cls.left
  }

  return (
    <label className={cn(cls.label, direction)}>
      <input {...input} {...props} className={cls.input} />
      <span className={cls.labelText}>{label}</span>
    </label>
  )
}

export default Checkbox
