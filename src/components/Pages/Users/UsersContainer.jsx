import React, { Component } from 'react'
import { connect } from 'react-redux'

import { follow, unfollow, togleFollowingProgress, requestUsers, getNewUsers } from '../../../redux/users-reducer'
import { getPageSize, getUsers, getTotalUsersCount, getCurrentPage, getIsFeatching, getFollowingInProgress } from '../../../redux/users-selectors'

import Users from './Users'

class UsersContainer extends Component {
  componentDidMount() {
    this.props.requestUsers(this.props.currentPage, this.props.pageSize)
  }

  onPageChanged = pageNumber => {
    this.props.getNewUsers(pageNumber, this.props.pageSize)
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

// const mapStateToProps = state => {
//   return {
//     users: state.usersPage.users,
//     pageSize: state.usersPage.pageSize,
//     totalUsersCount: state.usersPage.totalUsersCount,
//     currentPage: state.usersPage.currentPage,
//     isFeatching: state.usersPage.isFeatching,
//     followingInProgress: state.usersPage.followingInProgress
//   }
// }

const mapStateToProps = state => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFeatching: getIsFeatching(state),
    followingInProgress: getFollowingInProgress(state)
  }
}

export default connect(mapStateToProps, {
   follow, unfollow, togleFollowingProgress, requestUsers, getNewUsers
})(UsersContainer)

