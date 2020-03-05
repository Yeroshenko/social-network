import React from 'react'
import cn from 'classnames'
import { Link } from 'react-router-dom'

import { Button, Cover, User, Loader } from '../../Ui'

import coverImg from '../../../assets/img/user-wallpaper.jpg'

import cls from './Users.module.sass'

const Users = ( props ) => {
  const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
  const pages = []
  for (let i = 1; i <= pagesCount; i++) pages.push(i)

  return (
    <>
      <div className={cls.users}>
        {props.users.map(user => {
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
                {user.followed ? (
                  <Button
                    disabled={props.followingInProgress.some(id => user.id === id)}
                    onClick={() => props.unfollow(user.id)}
                  >
                    Отписаться
                  </Button>
                ) : (
                  <Button
                    disabled={props.followingInProgress.some(id => user.id === id)}
                    onClick={() => props.follow(user.id) }
                  >
                    Подписаться
                  </Button>
                )}
                <Button type='secondary'>Написать</Button>
              </div>
            </div>
          )
        })}
      </div>
      {props.isFeatching && <Loader />}
      <div className={cls.pagination}>
        {pages.map((page, index) => {
          return (
            <Button
              key={index}
              type='primary'
              className={cn(props.currentPage === page && cls.selectedPage)}
              onClick={() => { props.onPageChanged(page) }}
            > {page}
            </Button>
          )
        })}
      </div>
    </>
  )
}

export default Users
