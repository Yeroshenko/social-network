import React from 'react'

import { Loader, Pagination } from '../../Ui'
import UserCard from './UserCard/UserCard'

import cls from './Users.module.sass'

const Users = props => {
  const {
    users,
    followingInProgress,
    follow,
    unfollow,
    isFeatching,
    totalUsersCount,
    pageSize,
    currentPage,
    onPageChanged
  } = props

  return (
    <div>
      <div className={cls.users}>
        {users.map(user => (
          <UserCard
            key={user.id}
            user={user}
            followingInProgress={followingInProgress}
            follow={follow}
            unfollow={unfollow}
          />
        ))}
      </div>

      {isFeatching && <Loader />}

      <Pagination
        totalItemsCount={totalUsersCount}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChanged={onPageChanged}
        portionSize={6}
      />
    </div>
  )
}

export default Users
