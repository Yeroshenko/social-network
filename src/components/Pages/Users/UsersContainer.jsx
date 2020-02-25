import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as axios from 'axios'

import {
  followAC,
  unfollowAC,
  setUsersAC,
  setCurrentPageAC,
  setTotalUsersCountAC,
  setIsFeatchingAC
} from '../../../redux/users-reducer'

import Users from './Users'
import { Loader } from '../../Ui'

class UsersContainer extends Component {

  baseUrl = 'https://social-network.samuraijs.com/api/1.0/'

  componentDidMount() {
    this.props.toggleIsFeatching(true)
    axios
      .get(`${this.baseUrl}users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items)
        this.props.setTotalUsersCount(response.data.totalCount / 15) // test | delete divider
        this.props.toggleIsFeatching(false)
      })
  }

  onPageChanged = pageNumber => {
    this.props.setCurrentPage(pageNumber)
    this.props.toggleIsFeatching(true)
    axios
      .get(`${this.baseUrl}users?page=${pageNumber}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items)
        this.props.toggleIsFeatching(false)
      })
  }

  render() {
    return (
      <>
        {
          this.props.isFeatching && <Loader /> 
        }
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          onPageChanged={this.onPageChanged}
        />
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFeatching: state.usersPage.isFeatching
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
    },
    toggleIsFeatching: isFeatching => {
      dispatch(setIsFeatchingAC(isFeatching))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)
