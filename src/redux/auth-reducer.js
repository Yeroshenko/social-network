import { authApi, securityApi } from '../api/api'
import { stopSubmit } from 'redux-form'

const SET_USER_DATA = 'auth/SET_USER_DATA'
const GET_CAPTCHA_URL_SUCCESS = 'auth/GET_CAPTCHA_URL_SUCCESS'

const initialState = {
  userId: null,
  email: null,
  login: null, 
  isAuth: false,
  captchaUrl: null // if null then captcha is not required
}

const authReducer = (state = initialState, action) => {

  switch (action.type) {
    case SET_USER_DATA:
    case GET_CAPTCHA_URL_SUCCESS:
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

export const getCaptchaUrlSuccess = (captchaUrl) => (
  { type: GET_CAPTCHA_URL_SUCCESS, payload: { captchaUrl } }
)


// Thank creators
export const getAuthUserData = () => async (dispatch) => {
  const response = await authApi.me()

  if (response.resultCode === 0 ) {
    const { id, login, email } = response.data

    dispatch(setAuthUserData(id, login, email, true))
  }
}
export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
  const response = await authApi.login(email, password, rememberMe, captcha)

  if (response.resultCode === 0 ) {
    dispatch(getAuthUserData())
  } else {
    let message = 'Не коректный адрес электронной почты или пароль🙃'

    if (response.resultCode === 10 ) {
      dispatch(getCapthaUrl())
      message = 'Ну вот, заспамил, думаю стоит пройти каптчу🙃'  
      
    }
    dispatch(stopSubmit('login', { _error: message }))
  }
}
export const logout = () => async (dispatch) => {
  const response = await authApi.logout()

  if (response.resultCode === 0 ) {
    dispatch(setAuthUserData(null, null, null, false))
  }
}
export const getCapthaUrl = () => async (dispatch) => {
  const response = await securityApi.getCaptchaUrl()
  const captchaUrl = response.data.url
  
  dispatch(getCaptchaUrlSuccess(captchaUrl))
}

export default authReducer