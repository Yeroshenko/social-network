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
        ...action.payload
      }

    default: 
      return state
  }
}


// Action creaters
export const setAuthUserData = (userId, login, email, isAuth) => (
  { type: SET_USER_DATA, payload: {userId, login, email, isAuth} }
)


// Thank creators
export const getAuthUserData = () => (dispatch) => {
  authApi.me()
    .then(response => {
      if (response.resultCode === 0 ) {
        const { id, login, email } = response.data

        dispatch(setAuthUserData(id, login, email, true))
      }
    })
}
export const login = (email, password, rememberMe) => (dispatch) => {
  authApi.login(email, password, rememberMe)
    .then(response => {
      if (response.resultCode === 0 ) {

        dispatch(getAuthUserData())
      }
    })
}
export const logout = () => (dispatch) => {
  authApi.logout()
    .then(response => {
      if (response.resultCode === 0 ) {

        dispatch(setAuthUserData(null, null, null, false))
      }
    })
}

export default authReducer