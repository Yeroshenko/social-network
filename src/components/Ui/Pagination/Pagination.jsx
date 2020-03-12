import React from 'react'
import cn from 'classnames'

import { Button } from '..'

import cls from './Pagination.module.sass'

const Pagination = ({ totalUsersCount, pageSize, currentPage, onPageChanged }) => {

  const pagesCount = Math.ceil(totalUsersCount / pageSize)
  const pages = []

  for (let i = 1; i <= pagesCount; i++) pages.push(i)

  return (
    <div className={cls.pagination}>
      {pages.map((page, index) => {
        return (
          <Button
            key={index}
            type='primary'
            className={cn(currentPage === page && cls.selectedPage)}
            onClick={() => { onPageChanged(page) }}
          >
            {page}
          </Button>
        )
      })}
    </div>
  )
}

export default Pagination
