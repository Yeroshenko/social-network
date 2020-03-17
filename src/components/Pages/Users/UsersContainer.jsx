import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import {
  follow,
  unfollow,
  togleFollowingProgress,
  requestUsers,
  getNewUsers
} from '../../../redux/users-reducer'

import {
  getPageSize,
  getTotalUsersCount,
  getCurrentPage,
  getIsFeatching,
  getFollowingInProgress,
  getUsers
} from '../../../redux/users-selectors'

import Users from './Users'

class UsersContainer extends PureComponent {
  componentDidMount() {
    const { currentPage, pageSize, requestUsers } = this.props

    requestUsers(currentPage, pageSize)
  }

  onPageChanged = pageNumber => {
    const { getNewUsers, pageSize } = this.props

    getNewUsers(pageNumber, pageSize)
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
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFeatching: getIsFeatching(state),
    followingInProgress: getFollowingInProgress(state)
  }
}

export default connect(mapStateToProps, {
  follow,
  unfollow,
  togleFollowingProgress,
  requestUsers,
  getNewUsers
})(UsersContainer)
