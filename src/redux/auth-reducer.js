import { authApi } from '../api/api'
import { stopSubmit } from 'redux-form'

const SET_USER_DATA = 'auth/SET_USER_DATA'

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
export const getAuthUserData = () => async (dispatch) => {
  const response = await authApi.me()

  if (response.resultCode === 0 ) {
    const { id, login, email } = response.data

    dispatch(setAuthUserData(id, login, email, true))
  }
}
export const login = (email, password, rememberMe) => async (dispatch) => {

  const response = await authApi.login(email, password, rememberMe)

  if (response.resultCode === 0 ) {
    dispatch(getAuthUserData())
  } else {
    let message = 'Не коректный адрес электронной почты или пароль'

    if (response.resultCode === 10 ) {
      message = 'Ну вот, заспамил, здесь должна была быть капча, но пока ее нет🙃'  
    }
    dispatch(stopSubmit('login', {_error: message}))
  }
}
export const logout = () => async (dispatch) => {
  const response = await authApi.logout()

  if (response.resultCode === 0 ) {
    dispatch(setAuthUserData(null, null, null, false))
  }
}

export default authReducer