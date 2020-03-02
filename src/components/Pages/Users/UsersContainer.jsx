import React, { Component } from 'react'
import { connect } from 'react-redux'

import { follow, unfollow, togleFollowingProgress, getUsers, getNewUsers } from '../../../redux/users-reducer'

import Users from './Users'

class UsersContainer extends Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize)
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

export default connect(mapStateToProps, {
   follow, unfollow, togleFollowingProgress, getUsers, getNewUsers
})(UsersContainer)

