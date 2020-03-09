import React from 'react'
import cn from 'classnames'

import cls from './FormControls.module.sass'

const FormControlCreator = Element => ({ input, meta, ...props }) => {
  const hasInvalid = meta.touched && meta.error

  return (
    <div className={cn(cls.formControl, hasInvalid && cls.invalid)}>
      <Element {...input} {...props} />
      {hasInvalid && <span>{meta.error}</span>}
    </div>
  )
}

// exports
export const FormError = ({ errorMessage }) => {
  return <div className={cls.formError}>{errorMessage}</div>
}

export const Input = FormControlCreator('input')
export const Textarea = FormControlCreator('textarea')
