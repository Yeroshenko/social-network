import { usersApi } from '../api/api'

import { updateObjectInArray } from '../utils/object-helpers'

const FOLLOW = 'users/FOLLOW'
const UNFOLLOW = 'users/UNFOLLOW'
const SET_USERS = 'users/SET_USERS'
const SET_CURRENT_PAGE = 'users/SET_CURRENT_PAGE'
const SET_TOTAL_USER_COUNT = 'users/SET_TOTAL_USER_COUNT'
const TOGGLE_IS_FETCHING = 'users/TOGGLE_IS_FETCHING'
const TOGGLE_FOLLOWING_PROGRESS = 'users/TOGGLE_FOLLOWING_PROGRESS'

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
        users: updateObjectInArray(state.users, action.userId, 'id', { followed: true })
      } 

    case UNFOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, 'id', { followed: false })
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
  return async (dispatch) => {
    dispatch(toggleIsFeatching(true))

    const data = await usersApi.getUsers(currentPage, pageSize)

    dispatch(setUsers(data.items))
    dispatch(setTotalUsersCount(data.totalCount / 20)) // test | delete divider
    dispatch(toggleIsFeatching(false))  
  }
}
export const getNewUsers = (currentPage, pageSize) => {
  return async (dispatch) => {
    dispatch(setCurrentPage(currentPage))
    dispatch(toggleIsFeatching(true))

    const data = await usersApi.getUsers(currentPage, pageSize)

    dispatch(setUsers(data.items))
    dispatch(toggleIsFeatching(false))
      
  }
}

const followUnfollowFlow = (dispatch, userId, apiMethod, actionCreator) => {
  dispatch(togleFollowingProgress(true, userId))

  apiMethod(userId).then(response => {
    if (response.data.resultCode === 0) dispatch(actionCreator(userId))
    dispatch(togleFollowingProgress(false, userId))
  })
  
}

export const follow = (userId) => {
  return (dispatch) => {
    followUnfollowFlow(dispatch, userId, usersApi.follow.bind(userId), followSuccess)
  }
}
export const unfollow = (userId) => {
  return (dispatch) => {
    followUnfollowFlow(dispatch, userId, usersApi.unfollow.bind(userId), unfollowSuccess)
  }
}


export default usersReducer