import { usersApi } from '../api/api'

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USER_COUNT = 'SET_TOTAL_USER_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_FOLLOWING_PROGRESS = 'TOGGLE_FOLLOWING_PROGRESS'

const initialState = {
  users: [],
  pageSize: 9,
  totalUsersCount: 0,
  currentPage: 1,
  isFeatching: false,
  followingInProgress: []
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId) {
            return {...user, followed: true }
          } 
          return user
        })
      } 

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId) {
            return {...user, followed: false }
          } 
          return user
        })
      }
    
    case SET_USERS: 
      return { ...state, users: action.users }

    case SET_CURRENT_PAGE: 
      return { ...state, currentPage: action.currentPage }

    case SET_TOTAL_USER_COUNT: 
      return { ...state, totalUsersCount: action.totalCount }

    case TOGGLE_IS_FETCHING: 
      return { ...state, isFeatching: action.isFeatching }

    case TOGGLE_FOLLOWING_PROGRESS: 
      return { 
        ...state, 
        followingInProgress: action.isFeatching 
          ? [...state.followingInProgress, action.userId] 
          : state.followingInProgress.filter(id => id !== action.userId)
      }

    default:
      return state
  }
}


// Action creaters
export const followSuccess = (userId) => ({ type: FOLLOW, userId })
export const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setTotalUsersCount = (totalCount) => ({ type: SET_TOTAL_USER_COUNT, totalCount })
export const toggleIsFeatching = (isFeatching) => ({ type: TOGGLE_IS_FETCHING, isFeatching })
export const togleFollowingProgress = (isFeatching, userId) => ({ type: TOGGLE_FOLLOWING_PROGRESS, isFeatching, userId })


// Thank creators
export const requestUsers = (currentPage, pageSize) => {
  return (dispatch) => {
    dispatch(toggleIsFeatching(true))

    usersApi.getUsers(currentPage, pageSize)
      .then(data => {
        dispatch(setUsers(data.items))
        dispatch(setTotalUsersCount(data.totalCount / 20)) // test | delete divider
        dispatch(toggleIsFeatching(false))  
      })
  }
}
export const getNewUsers = (currentPage, pageSize) => {
  return (dispatch) => {
    dispatch(setCurrentPage(currentPage))
    dispatch(toggleIsFeatching(true))

    usersApi.getUsers(currentPage, pageSize)
      .then(data => {
        dispatch(setUsers(data.items))
        dispatch(toggleIsFeatching(false))
      })
  }
}
export const follow = (userId) => {
  return (dispatch) => {
    dispatch(togleFollowingProgress(true, userId))

    usersApi.follow(userId).then(response => {
      if (response.data.resultCode === 0){
       dispatch(followSuccess(userId))
      }
      dispatch(togleFollowingProgress(false, userId))
    })
  }
}
export const unfollow = (userId) => {
  return (dispatch) => {
    dispatch(togleFollowingProgress(true, userId))

    usersApi.unfollow(userId).then(response => {
      if (response.data.resultCode === 0){
       dispatch(unfollowSuccess(userId))
      }
      dispatch(togleFollowingProgress(false, userId))
    })
  }
}


export default usersReducer