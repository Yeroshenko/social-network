import React from 'react'
import * as axios from 'axios'

import userPhoto from '../../../assets/img/user.png'

import cls from './Users.module.sass'

const Users = ({ users, follow, unfollow, setUsers }) => {
  if (users.length === 0) {
    axios
      .get('https://social-network.samuraijs.com/api/1.0/users')
      .then(response => {
        setUsers(response.data.items)
      })
  }

  return (
    <div>
      {users.map(user => {
        return (
          <div className={cls.user} key={user.id}>
            <span>
              <div className=''>
                <img
                  src={user.photos.small ? user.photos.small : userPhoto}
                  alt='user'
                />
              </div>
              <div className=''>
                {user.followed ? 
                  <button
                    className={'btnPrimary'}
                    onClick={() => unfollow(user.id)}
                  >
                    Unollow
                  </button>
                 : 
                  <button
                    className={'btnPrimary'}
                    onClick={() => follow(user.id)}
                  >
                    Follow
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
