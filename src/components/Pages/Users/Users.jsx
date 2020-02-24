import React from 'react'

import cls from './Users.module.sass'

const Users = ({ users, follow, unfollow, setUsers }) => {
  if (users.length === 0) {
    setUsers([
      {
        id: 1,
        fullName: 'Name1 Surname1',
        status: 'website1.io',
        location: {
          city: 'Kiev',
          country: 'Ukraine'
        },
        photoUrl: 'https://cutt.ly/Cr2Yc5d',
        followed: true
      },
      {
        id: 2,
        fullName: 'Name2 Surname2',
        status: 'website2.io',
        location: {
          city: 'Kiev',
          country: 'Ukraine'
        },
        photoUrl: 'https://cutt.ly/Cr2Yc5d',
        followed: false
      },
      {
        id: 3,
        fullName: 'Name3 Surname3',
        status: 'website3.io',
        location: {
          city: 'Kiev',
          country: 'Ukraine'
        },
        photoUrl: 'https://cutt.ly/Cr2Yc5d',
        followed: false
      },
      {
        id: 4,
        fullName: 'Name4 Surname4',
        status: 'website4.io',
        location: {
          city: 'Kiev',
          country: 'Ukraine'
        },
        photoUrl: 'https://cutt.ly/Cr2Yc5d',
        followed: true
      },
      {
        id: 5,
        fullName: 'Name5 Surname5',
        status: 'website5.io',
        location: {
          city: 'Kiev',
          country: 'Ukraine'
        },
        photoUrl: 'https://cutt.ly/Cr2Yc5d',
        followed: true
      }
    ])
  }

  return (
    <div>
      {users.map(user => {
        return (
          <div className={cls.user} key={user.id}>
            <span>
              <div className=''>
                <img src={user.photoUrl} alt='user' />
              </div>
              <div className=''>
                {user.followed 
                  ? <button
                    className={'btnPrimary'}
                    onClick={() => unfollow(user.id)}
                    > Unollow
                    </button>
                  : <button
                      className={'btnPrimary'}
                      onClick={() => follow(user.id)}
                    > Follow
                    </button>
                }
              </div>
            </span>
            <span>
              <span>
                <div className=''>{user.fullName}</div>
                <div className=''>{user.status}</div>
              </span>
              <span>
                <div className=''>{user.location.city}</div>
                <div className=''>{user.location.country}</div>
              </span>
            </span>
          </div>
        )
      })}
    </div>
  )
}

export default Users
