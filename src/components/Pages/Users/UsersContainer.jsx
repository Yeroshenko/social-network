import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as axios from 'axios'

import {
  followAC,
  unfollowAC,
  setUsersAC,
  setCurrentPageAC,
  setTotalUsersCountAC
} from '../../../redux/users-reducer'

import Users from './Users'

class UsersContainer extends Component {

  baseUrl = 'https://social-network.samuraijs.com/api/1.0/'

  componentDidMount() {
    if (this.props.users.length === 0) {
      axios
        .get(`${this.baseUrl}users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then(response => {
          this.props.setUsers(response.data.items)
          this.props.setTotalUsersCount(response.data.totalCount)
        })
    }
  }

  onPageChanged = pageNumber => {
    this.props.setCurrentPage(pageNumber)
    axios
      .get(`${this.baseUrl}users?page=${pageNumber}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items)
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
      />
    )
  }
}

const mapStateToProps = state => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage
  }
}

const mapDispatchToProps = dispatch => {
  return {
    follow: userId => {
      dispatch(followAC(userId))
    },
    unfollow: userId => {
      dispatch(unfollowAC(userId))
    },
    setUsers: users => {
      dispatch(setUsersAC(users))
    },
    setCurrentPage: pageNumber => {
      dispatch(setCurrentPageAC(pageNumber))
    },
    setTotalUsersCount: totalCount => {
      dispatch(setTotalUsersCountAC(totalCount))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)
