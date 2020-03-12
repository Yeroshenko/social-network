import React from 'react'

import { Loader, Pagination } from '../../Ui'
import UserCard from './UserCard/UserCard'

import cls from './Users.module.sass'

const Users = (props) => {
  return (
    <div>
      <div className={cls.users}>
        {props.users.map(user => (
          <UserCard
            key={user.id}
            user={user}
            followingInProgress={props.followingInProgress}
            follow={props.follow}
            unfollow={props.unfollow}
          />
        ))}
      </div>
      
      {props.isFeatching && <Loader />}
      
      <Pagination
        totalUsersCount={props.totalUsersCount}
        pageSize={props.pageSize}
        currentPage={props.currentPage}
        onPageChanged={props.onPageChanged}
      />
    </div>
  )
}

export default Users
