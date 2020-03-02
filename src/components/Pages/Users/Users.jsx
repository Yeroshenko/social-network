import React from 'react'
import cn from 'classnames'
import { Link } from 'react-router-dom'

import { Button, Cover, User, Loader } from '../../Ui'

import coverImg from '../../../assets/img/users-wallpaper.jpg'

import cls from './Users.module.sass'
import { usersApi } from '../../../api/api'

const Users = ({ totalUsersCount, currentPage, pageSize, users, follow, unfollow, onPageChanged, isFeatching }) => {
  
  const pagesCount = Math.ceil(totalUsersCount / pageSize)
  const pages = []
  for (let i = 1; i <= pagesCount; i++) pages.push(i)

  return (
    <>
      <div className={cls.users}>
        {users.map(user => {
          return (
            <div className={cls.userItem} key={user.id}>
              <Cover coverImg={coverImg} className={cls.cover} />
              <Link to={'/profile/' + user.id}>
                <User
                  photo={user.photos.large}
                  name={user.name}
                  aboutMe={user.status}
                  className={cls.user}
                />
              </Link>
              <div className={cls.buttons}>
                {user.followed ? 
                  <Button type='primary' onClick={() => {
                    usersApi.unfollow(user.id)
                      .then(response => {
                        if(response.data.resultCode === 0) unfollow(user.id)
                      })
                    }}>
                    Отписаться
                  </Button>
                :
                  <Button type='primary' onClick={() => {
                    usersApi.follow(user.id)
                      .then(response => {
                        if(response.data.resultCode === 0) follow(user.id)
                      })
                    }
                  }>
                    Подписаться
                  </Button>
                }
                <Button type='secondary'>Написать</Button>
              </div>
            </div>
          )
        })}
      </div>
      { isFeatching && <Loader /> }
      <div className={cls.pagination}>
        {pages.map((page, index) => {
          return (
            <Button
              key={index}
              type='primary'
              className={cn(currentPage === page && cls.selectedPage)}
              onClick={ () => {onPageChanged(page)} }
            > {page}
            </Button>
          )
        })}
      </div>
    </>
  )
}

export default Users
