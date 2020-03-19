import React, { useState } from 'react'
import cn from 'classnames'

import cls from './FormControls.module.sass'

const FormControlCreator = ({ input, label, meta, field, ...props }) => {
  const [inFocuse, setInFocuse] = useState(false)

  const hasInvalid = meta.touched && meta.error

  const onFocus = () => setInFocuse(true)
  const onBlur = () => {
    if (!input.value.length) setInFocuse(false)
  }

  return (
    <div className={cn(cls.formControl, hasInvalid && cls.invalid)}>
      <div className={cn(cls.formControlInner, inFocuse && cls.active)}>
        <label className={cls.formControlLabel}>{label}</label>
        {field === 'input' && (
          <input {...input} {...props} onFocus={onFocus} onBlur={onBlur} />
        )}
        {field === 'textarea' && (
          <textarea {...input} {...props} onFocus={onFocus} onBlur={onBlur} />
        )}
      </div>
      {hasInvalid && <span>{meta.error}</span>}
    </div>
  )
}

// exports
export const FormError = ({ errorMessage }) => (
  <div className={cls.formError}>{errorMessage}</div>
)
export const Input = props => <FormControlCreator {...props} field='input' />
export const Textarea = props => <FormControlCreator {...props} field='textarea' />