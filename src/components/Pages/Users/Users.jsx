import React, { Component } from 'react'
import * as axios from 'axios'
import cn from 'classnames'

import userPhoto from '../../../assets/img/user.png'

import cls from './Users.module.sass'

class Users extends Component {

  componentDidMount() {
    if (this.props.users.length === 0) {
      axios
        .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then(response => {
          this.props.setUsers(response.data.items)
          this.props.setTotalUsersCount(response.data.totalCount)
        })
    }
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber)
    axios
        .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
        .then(response => {
          this.props.setUsers(response.data.items)
        })
  } 

  render() {
    const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
    const pages = []

    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i)
    }

    return (
      <div>
        {this.props.users.map(user => {
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
                      onClick={() => this.props.unfollow(user.id)}
                    >Unollow
                    </button>
                    : 
                    <button
                      className={'btnPrimary'}
                      onClick={() => this.props.follow(user.id)}
                    >Follow
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

        <div className={cls.pagination}>
          {pages.map(page => {
            return (
              <button 
                className={cn(this.props.currentPage === page && cls.selectedPage, 'btnPrimary')}
                onClick={() => { this.onPageChanged(page) }}
                >{page}
                </button>
              )
          } )}
        </div>
      </div>
    )
  }
}

export default Users
