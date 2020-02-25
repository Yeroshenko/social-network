import React from 'react'
import cn from 'classnames'

import userPhoto from '../../../assets/img/user.png'

import cls from './Users.module.sass'

const Users = ({ totalUsersCount, currentPage, pageSize, users, follow, unfollow, onPageChanged }) => {
  const pagesCount = Math.ceil(totalUsersCount / pageSize)
  const pages = []

  for (let i = 1; i <= pagesCount; i++) pages.push(i)
  console.log(pageSize)
  return (
    <div className={cls.users}>
      {users.map(user => {
        return (
          <div className={cls.user} key={user.id}>
            <span>
              <div className=''>
                <img
                  src={user.photos.large ? user.photos.large : userPhoto}
                  alt='user'
                />
              </div>
              <div className=''>
                {user.followed ?
                  <button
                    className={'btnPrimary'}
                    onClick={() => unfollow(user.id)}
                  > Unollow
                  </button>
                 : 
                  <button
                    className={'btnPrimary'}
                    onClick={() => follow(user.id)}
                  > Follow
                  </button>
                }
              </div>
            </span>
            <span>
              <span>
                <div className=''>{user.name}</div>
                <div className=''>{user.status}</div>
              </span>
              <span>
                <div className=''>{'user.location.city'}</div>
                <div className=''>{'user.location.country'}</div>
              </span>
            </span>
          </div>
        )
      })}

      <div className={cls.pagination}>
        {pages.map(page => {
          return (
            <button
              className={cn(currentPage === page && cls.selectedPage, 'btnPrimary')}
              onClick={() => {onPageChanged(page)}}
            > {page}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default Users
