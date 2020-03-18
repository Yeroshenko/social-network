import React from 'react'

import cls from './Checkbox.module.sass'

const Checkbox = ({ input, label, meta, ...props }) => {
  return (
    <label className={cls.label}>
      <input {...input} {...props} className={cls.input} />
      <span className={cls.labelText}>{label}</span>
    </label>
  )
}

export default Checkbox
