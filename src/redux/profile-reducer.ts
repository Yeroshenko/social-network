import { profileApi } from '../api/api'
import { PostType, ProfileType, PhotosType, ContactsType } from '../types/types'

const ADD_POST = 'PROFILE/ADD_POST'
const DELETE_POST = 'PROFILE/DELETE_POST'
const SET_USER_PROFILE = 'PROFILE/SET_USER_PROFILE'
const SET_STATUS = 'PROFILE/SET_STATUS'
const UPDATE_PHOTO_SUCCESS = 'PROFILE/UPDATE_PHOTO_SUCCESS'


const initialState = {
  posts: [
    {
      id: 1,
      message:
        'Используя props и state, можно создать небольшое приложение списка дел. В этом примере используется state для отслеживания текущего списка элементов, а также текста, введённого пользователем. Хотя обработчики событий встроены в разметку, они собираются и реализуются с помощью делегирования событий.'
    },
    {
      id: 2,
      message:
        'Помимо входных данных (доступных через this.props), компонент поддерживает внутренние данные состояния (доступные через this.state). Когда данные состояния компонента изменятся, React ещё раз вызовет render() и обновит отрендеренную разметку.'
    },
    {
      id: 3,
      message:
        'React-компоненты реализуют метод render(), который принимает входные данные и возвращает что-то для вывода. В этом примере используется XML-подобный синтаксис под названием JSX. Входные данные, передаваемые в компонент, доступны в render() через this.props.'
    }
  ] as Array<PostType>,
  profile: null as ProfileType | null,
  status: '',
  newPostText: ''
}

export type InitialStateType = typeof initialState

const profileReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_POST: {
      const newPost = {
        id: state.posts.length + 1,
        message: action.postText
      }
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: ''
      }
    }

    case DELETE_POST: {
      return {
        ...state,
        posts: state.posts.filter(post => post.id !== action.postId)
      }
    }

    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile
      }
    }

    case SET_STATUS: {
      return {
        ...state,
        status: action.status
      }
    }

    case UPDATE_PHOTO_SUCCESS: {
      return {
        ...state,
        profile: { ...state.profile, photos: action.photos }
      }
    }

    default:
      return state
  }
}

type AddPostType = {
  type: typeof ADD_POST
  postText: string
}
type DeletePostType = {
  type: typeof DELETE_POST
  postId: number
}

type SetUserProfileType = { 
  type: typeof SET_USER_PROFILE
  profile: ProfileType
}

type SetStatusType = {
  type: typeof SET_STATUS, 
  status: string
}

type UpdatePhotoSuccessType = {
  type: typeof UPDATE_PHOTO_SUCCESS, 
  photos: PhotosType
}

// Action creators
export const addPost = (postText: string): AddPostType => ({ type: ADD_POST, postText })
export const deletePost = (postId: number): DeletePostType => ({ type: DELETE_POST, postId })
export const setUserProfile = (profile: ProfileType): SetUserProfileType => ({ type: SET_USER_PROFILE, profile })
export const setStatus = (status: string): SetStatusType => ({ type: SET_STATUS, status })
export const updatePhotoSuccess = (photos: PhotosType): UpdatePhotoSuccessType => ({ type: UPDATE_PHOTO_SUCCESS, photos })

// Thank creators
export const getUserProfile = (userId: number) => async (dispatch: any) => {
  const response = await profileApi.getProfile(userId)

  dispatch(setUserProfile(response))
}
export const getUserStatus = (userId: number) => async (dispatch: any) => {
  const response = await profileApi.getStatus(userId)

  dispatch(setStatus(response))
}
export const updateUserStatus = (status: string) => async (dispatch: any) => {
  const response = await profileApi.updateStatus(status)

  if (response.data.resultCode === 0) dispatch(setStatus(status))
}
export const updatePhoto = (file: any) => async (dispatch: any) => {
  const response = await profileApi.updatePhoto(file)

  if (response.data.resultCode === 0)
    dispatch(updatePhotoSuccess(response.data.data.photos))
}
export const updateProfileInfo = (profile: ProfileType) => async (dispatch: any, getState: any) => {
  const userId = getState().auth.userId
  const prewProfile = getState().profilePage.profile
  const contacts = { ...prewProfile.contacts }
  const newProfile = { ...profile, contacts }
  const response = await profileApi.updateProfile(newProfile)

  if (response.data.resultCode === 0) dispatch(getUserProfile(userId))
}
export const updateContactsInfo = (contacts: ContactsType) => async (dispatch: any, getState: any) => {
  const userId = getState().auth.userId
  const profile = getState().profilePage.profile
  const newProfile = { ...profile, contacts }
  const response = await profileApi.updateProfile(newProfile)

  if (response.data.resultCode === 0) dispatch(getUserProfile(userId))
}

export default profileReducer
