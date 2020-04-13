import { authApi, securityApi } from '../api/api'
import { stopSubmit } from 'redux-form'

const SET_USER_DATA = 'AUTH/SET_USER_DATA'
const GET_CAPTCHA_URL_SUCCESS = 'AUTH/GET_CAPTCHA_URL_SUCCESS'

const initialState = {
  userId: null as number | null,
  email: null as string | null,
  login: null as string | null,
  isAuth: false,
  captchaUrl: null as string | null // if null then captcha is not required
}

export type InitialStateType = typeof initialState

const authReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case SET_USER_DATA:
    case GET_CAPTCHA_URL_SUCCESS:
      return {
        userId: 'as', // wtf
        ...state,
        ...action.payload
      }

    default:
      return state
  }
}

// Action creators
type SetAuthUserDataPayloadType = {
  userId: number | null
  login: string | null
  email: string | null
  isAuth: boolean
}

type SetAuthUserDataType = {
  type: typeof SET_USER_DATA
  payload: SetAuthUserDataPayloadType
}

export const setAuthUserData = (
  userId: number | null,
  login: string | null,
  email: string | null,
  isAuth: boolean
): SetAuthUserDataType => ({
  type: SET_USER_DATA,
  payload: { userId, login, email, isAuth }
})

type getCaptchaUrlSuccessType = {
  type: typeof GET_CAPTCHA_URL_SUCCESS
  payload: { captchaUrl: string }
}

export const getCaptchaUrlSuccess = (
  captchaUrl: string
): getCaptchaUrlSuccessType => ({
  type: GET_CAPTCHA_URL_SUCCESS,
  payload: { captchaUrl }
})

// Thank creators
export const getAuthUserData = () => async (dispatch: any) => {
  const response = await authApi.me()

  if (response.resultCode === 0) {
    const { id, login, email } = response.data

    dispatch(setAuthUserData(id, login, email, true))
  }
}
export const login = (
  email: string,
  password: string,
  rememberMe: boolean,
  captcha: string
) => async (dispatch: any) => {
  const response = await authApi.login(email, password, rememberMe, captcha)

  if (response.resultCode === 0) {
    dispatch(getAuthUserData())
  } else {
    let message = 'Не коректный адрес электронной почты или пароль🙃'

    if (response.resultCode === 10) {
      dispatch(getCapthaUrl())
      message = 'Ну вот, заспамил, думаю стоит пройти каптчу🙃'
    }
    dispatch(stopSubmit('login', { _error: message }))
  }
}
export const logout = () => async (dispatch: any) => {
  const response = await authApi.logout()

  if (response.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false))
  }
}
export const getCapthaUrl = () => async (dispatch: any) => {
  const response = await securityApi.getCaptchaUrl()
  const captchaUrl = response.data.url

  dispatch(getCaptchaUrlSuccess(captchaUrl))
}

export default authReducer
