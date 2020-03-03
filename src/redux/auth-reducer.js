import { authApi } from "../api/api"

const SET_USER_DATA = 'SET_USER_DATA'

const initialState = {
  userId: null,
  email: null,
  login: null, 
  isAuth: false
}

const authReducer = (state = initialState, action) => {

  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true
      }

    default: 
      return state
  }
}


// Action creaters
export const setAuthUserData = (userId, login, email) => (
  { type: SET_USER_DATA, data: {userId, login, email} }
)


// Thank creators
export const getAuthUserData = () => {
  return (dispatch) => {
    authApi.me()
      .then(response => {
        if (response.resultCode === 0 ) {
          const {id, login, email} = response.data

          dispatch(setAuthUserData(id, login, email))
        }
      })
  }
}

export default authReducer