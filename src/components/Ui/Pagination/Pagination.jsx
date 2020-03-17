import React, { useState } from 'react'
import cn from 'classnames'

import { Button } from '..'

import cls from './Pagination.module.sass'

const Pagination = ({
  totalItemsCount,
  pageSize,
  currentPage,
  onPageChanged,
  portionSize = 6
}) => {
  const pagesCount = Math.ceil(totalItemsCount / pageSize)
  const pages = []

  for (let i = 1; i <= pagesCount; i++) pages.push(i)

  const [portionNumber, setPortionNumber] = useState(1)

  const portionCount = Math.ceil(pagesCount / portionSize)
  const leftPortionNumber = (portionNumber - 1) * portionSize + 1
  const rightPortionNumber = portionNumber * portionSize

  const prewPortion = () => {
    if (portionNumber - 1 >= 0) return
    setPortionNumber(portionNumber - 1)
  }
  const nextPortion = () => {
    if (portionNumber + 1 > portionCount) return
    setPortionNumber(portionNumber + 1)
  }

  return (
    <div className={cls.pagination}>
      <Button type='secondary' onClick={prewPortion}>
        &lt;
      </Button>

      {pages
        .filter(page => page >= leftPortionNumber && page <= rightPortionNumber)
        .map((page, index) => {
          return (
            <Button
              key={index}
              type='primary'
              className={cn(currentPage === page && cls.selectedPage)}
              onClick={() => {
                onPageChanged(page)
              }}
            >
              {page}
            </Button>
          )
        })}
      <Button type='secondary' onClick={nextPortion}>
        &gt;
      </Button>
    </div>
  )
}

export default Pagination
