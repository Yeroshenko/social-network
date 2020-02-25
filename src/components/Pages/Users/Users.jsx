import React from 'react'
import cn from 'classnames'

import userPhoto from '../../../assets/img/user.png'

import cls from './Users.module.sass'

const Users = ({ totalUsersCount, currentPage, pageSize, users, follow, unfollow, onPageChanged }) => {
  const pagesCount = Math.ceil(totalUsersCount / pageSize)
  const pages = []

  for (let i = 1; i <= pagesCount; i++) pages.push(i)
  
  return (
    <div className={cls.users}>
      <div className={cls.pagination}>
        {pages.map((page, index) => {
          return (
            <button 
              key={index}
              className={cn(currentPage === page && cls.selectedPage, 'btnPrimary')}
              onClick={() => {onPageChanged(page)}}
            > {page}
            </button>
          )
        })}
      </div>

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

      
    </div>
  )
}

export default Users
