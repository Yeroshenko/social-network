const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USER_COUNT = 'SET_TOTAL_USER_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

const initialState = {
  users: [],
  pageSize: 9,
  totalUsersCount: 0,
  currentPage: 1,
  isFeatching: false
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

    default:
      return state
  }
}

export const followAC = (userId) => ({ type: FOLLOW, userId })
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId })
export const setUsersAC = (users) => ({ type: SET_USERS, users })
export const setCurrentPageAC = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setTotalUsersCountAC = (totalCount) => ({ type: SET_TOTAL_USER_COUNT, totalCount })
export const setIsFeatchingAC = (isFeatching) => ({ type: TOGGLE_IS_FETCHING, isFeatching })

export default usersReducer