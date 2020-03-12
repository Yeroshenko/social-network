import React, { useState } from 'react'
import cn from 'classnames'

import cls from './Tooltip.module.sass'

const Tooltip = ({ children, content, style, position }) => {
  const [visible, setVisible] = useState(false)

  const show = () => setVisible(true)
  const hide = () => setVisible(false)
  let classPosition

  switch (position) {
    case 'top':
      classPosition = cls.top
      break
    case 'right':
      classPosition = cls.right
      break
    case 'bottom':
      classPosition = cls.bottom
      break
    case 'left':
      classPosition = cls.left
      break
    default:
      classPosition = cls.right
  }

  const classes = cn(cls.tooltip, classPosition, visible && cls.visible )

  return (
    <div className={cls.tooltipWrapper}>
      <div style={style} className={classes}>
        {content}
      </div>

      <div
        className={cls.targetElement}
        onMouseEnter={show}
        onMouseLeave={hide}
      >
        {children}
      </div>
    </div>
  )
}

export default Tooltip
