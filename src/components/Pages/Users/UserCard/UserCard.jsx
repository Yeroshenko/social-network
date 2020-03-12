import React from 'react'
import { Link } from 'react-router-dom'

import { Cover, User, Button } from '../../../Ui'

import coverImg from '../../../../assets/img/user-wallpaper.jpg'

import cls from './UserCard.module.sass'

const UserCard = ({ user, followingInProgress, follow, unfollow }) => {
  return (
    <div className={cls.userCard} key={user.id}>
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
            disabled={followingInProgress.some(id => user.id === id)}
            onClick={() => unfollow(user.id)}
          >
            Отписаться
          </Button>
        ) : (
          <Button
            disabled={followingInProgress.some(id => user.id === id)}
            onClick={() => follow(user.id)}
          >
            Подписаться
          </Button>
        )}
        <Button type='secondary'>Написать</Button>
      </div>
    </div>
  )
}

export default UserCard
