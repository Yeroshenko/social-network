import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFeatching,
  togleFollowingProgress
} from '../../../redux/users-reducer'

import { usersApi } from '../../../api/api'

import Users from './Users'

class UsersContainer extends Component {

  componentDidMount() {
    this.props.toggleIsFeatching(true)
    
    usersApi.getUsers(this.props.currentPage, this.props.pageSize)
      .then(data => {
        this.props.setUsers(data.items)
        this.props.setTotalUsersCount(data.totalCount / 5) // test | delete divider
        this.props.toggleIsFeatching(false)
      })
  }

  onPageChanged = pageNumber => {
    this.props.setCurrentPage(pageNumber)
    this.props.toggleIsFeatching(true)

    usersApi.getUsers(pageNumber, this.props.pageSize)
      .then(data => {
        this.props.setUsers(data.items)
        this.props.toggleIsFeatching(false)
      })
  }

  render() {
    return (
      <Users
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        users={this.props.users}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
        onPageChanged={this.onPageChanged}
        isFeatching={this.props.isFeatching}
        followingInProgress={this.props.followingInProgress}
        togleFollowingProgress={this.props.togleFollowingProgress}
      />
    )
  }
}

const mapStateToProps = state => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFeatching: state.usersPage.isFeatching,
    followingInProgress: state.usersPage.followingInProgress
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     follow: userId => {
//       dispatch(followAC(userId))
//     },
//     unfollow: userId => {
//       dispatch(unfollowAC(userId))
//     },
//     setUsers: users => {
//       dispatch(setUsersAC(users))
//     },
//     setCurrentPage: pageNumber => {
//       dispatch(setCurrentPageAC(pageNumber))
//     },
//     setTotalUsersCount: totalCount => {
//       dispatch(setTotalUsersCountAC(totalCount))
//     },
//     toggleIsFeatching: isFeatching => {
//       dispatch(setIsFeatchingAC(isFeatching))
//     }
//   }
// }

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFeatching,
  togleFollowingProgress
})(UsersContainer)
