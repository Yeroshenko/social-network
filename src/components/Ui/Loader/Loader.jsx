import React from 'react'
import cn from 'classnames'

import './Loader.scss'

const Loader = ({ fullPage = false }) => {
  const classes = cn('loader', fullPage && 'fullPage')

  return (
    <div className={classes}>
      <div className='loader-element'></div>
      <div className='loader-element'></div>
      <div className='loader-element'></div>
      <div className='loader-element'></div>
      <div className='loader-element'></div>
    </div>
  )
}

export default Loader
