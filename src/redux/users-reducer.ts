import { usersApi } from '../api/api'
import { UserType } from '../types/types'
import { updateObjectInArray } from '../utils/object-helpers'

const FOLLOW = 'USERS/FOLLOW'
const UNFOLLOW = 'USERS/UNFOLLOW'
const SET_USERS = 'USERS/SET_USERS'
const SET_CURRENT_PAGE = 'USERS/SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'USERS/SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'USERS/TOGGLE_IS_FETCHING'
const TOGGLE_FOLLOWING_PROGRESS = 'USERS/TOGGLE_FOLLOWING_PROGRESS'

const initialState = {
  users: [] as Array<UserType>,
  pageSize: 9,
  totalUsersCount: 0,
  currentPage: 1,
  isFeatching: false,
  followingInProgress: [] as Array<number> // array of users id
}

type InitialStateType = typeof initialState

const usersReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, 'id', {
          followed: true
        })
      }

    case UNFOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, 'id', {
          followed: false
        })
      }

    case SET_USERS:
      return { ...state, users: action.users }

    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage }

    case SET_TOTAL_USERS_COUNT:
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

type FollowSuccessType = {
  type: typeof FOLLOW,
  userId: number
}

type UnfollowSuccessType = {
  type: typeof UNFOLLOW,
  userId: number
}

type SetUsersType = {
  type: typeof SET_USERS
  users: Array<UserType>
}

type SetCurrentPageType = {
  type: typeof SET_CURRENT_PAGE
  currentPage: number
}

type SetTotalUsersCountType = {
  type: typeof SET_TOTAL_USERS_COUNT
  totalCount: number
}

type ToggleIsFeatchingType = {
  type: typeof TOGGLE_IS_FETCHING
  isFeatching: boolean
}

type TogleFollowingProgressType = {
  type: typeof TOGGLE_FOLLOWING_PROGRESS
  isFeatching: boolean
  userId: number
}


// Action creaters
export const followSuccess = (userId: number): FollowSuccessType => ({ type: FOLLOW, userId })
export const unfollowSuccess = (userId: number): UnfollowSuccessType => ({ type: UNFOLLOW, userId })
export const setUsers = (users: Array<UserType>): SetUsersType => ({ type: SET_USERS, users })
export const setCurrentPage = (currentPage: number): SetCurrentPageType => ({
  type: SET_CURRENT_PAGE,
  currentPage
})
export const setTotalUsersCount = (totalCount: number): SetTotalUsersCountType => ({
  type: SET_TOTAL_USERS_COUNT,
  totalCount
})
export const toggleIsFeatching = (isFeatching: boolean): ToggleIsFeatchingType => ({
  type: TOGGLE_IS_FETCHING,
  isFeatching
})
export const togleFollowingProgress = (isFeatching: boolean, userId: number): TogleFollowingProgressType => ({
  type: TOGGLE_FOLLOWING_PROGRESS,
  isFeatching,
  userId
})

// Thank creators
export const requestUsers = (currentPage: number , pageSize: number) => {
  return async (dispatch: any) => {
    dispatch(toggleIsFeatching(true))
    dispatch(setCurrentPage(currentPage))
    const data = await usersApi.getUsers(currentPage, pageSize)

    dispatch(setUsers(data.items))
    dispatch(setTotalUsersCount(data.totalCount))
    dispatch(toggleIsFeatching(false))
  }
}
export const getNewUsers = (currentPage: number, pageSize: number) => {
  return async (dispatch: any) => {
    dispatch(setCurrentPage(currentPage))
    dispatch(toggleIsFeatching(true))

    const data = await usersApi.getUsers(currentPage, pageSize)

    dispatch(setUsers(data.items))
    dispatch(toggleIsFeatching(false))
  }
}

const followUnfollowFlow = (dispatch: any, userId: number, apiMethod: any, actionCreator: any) => {
  dispatch(togleFollowingProgress(true, userId))

  apiMethod(userId).then((response: any) => {
    if (response.data.resultCode === 0) dispatch(actionCreator(userId))
    dispatch(togleFollowingProgress(false, userId))
  })
}

export const follow = (userId: any) => {
  return (dispatch: any) => {
    followUnfollowFlow( dispatch, userId, usersApi.follow.bind(userId), followSuccess)
  }
}
export const unfollow = (userId: any) => {
  return (dispatch: any) => {
    followUnfollowFlow( dispatch, userId, usersApi.unfollow.bind(userId), unfollowSuccess)
  }
}

export default usersReducer
