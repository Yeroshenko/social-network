import { profileApi } from '../api/api'

const ADD_POST = 'profile/ADD_POST'
const DELETE_POST = 'profile/DELETE_POST'
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE'
const SET_STATUS = 'profile/SET_STATUS'
const UPDATE_PHOTO_SUCCESS = 'profile/UPDATE_PHOTO_SUCCESS'

const initialState = {
  posts: [{
      id: 1,
      message: 'Используя props и state, можно создать небольшое приложение списка дел. В этом примере используется state для отслеживания текущего списка элементов, а также текста, введённого пользователем. Хотя обработчики событий встроены в разметку, они собираются и реализуются с помощью делегирования событий.'
    },
    {
      id: 2,
      message: 'Помимо входных данных (доступных через this.props), компонент поддерживает внутренние данные состояния (доступные через this.state). Когда данные состояния компонента изменятся, React ещё раз вызовет render() и обновит отрендеренную разметку.'
    },
    {
      id: 3,
      message: 'React-компоненты реализуют метод render(), который принимает входные данные и возвращает что-то для вывода. В этом примере используется XML-подобный синтаксис под названием JSX. Входные данные, передаваемые в компонент, доступны в render() через this.props.'
    }
  ],
  profile: null,
  status: ''
}

const profileReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_POST: {
      const newPost = {
        id: state.posts.length + 1,
        message: action.postText,
        likesCount: 0
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
        profile: {...state.profile, photos: action.photos }
      }
    }

    default:
      return state
  }
}


// Action creators
export const addPost = (postText) => ({ type: ADD_POST, postText })
export const deletePost = (postId) => ({ type: DELETE_POST, postId })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setStatus = (status) => ({ type: SET_STATUS, status })
export const updatePhotoSuccess = (photos) => ({ type: UPDATE_PHOTO_SUCCESS, photos })


// Thank creators
export const getUserProfile = (userId) => async (dispatch) => {
  const response = await profileApi.getProfile(userId)

  dispatch(setUserProfile(response))
}
export const getUserStatus = (userId) => async (dispatch) => {
  const response = await profileApi.getStatus(userId)

  dispatch(setStatus(response))
}
export const updateUserStatus = (status) => async (dispatch) => {
  const response = await profileApi.updateStatus(status)

  if (response.data.resultCode === 0) dispatch(setStatus(status))
}
export const updatePhoto = (file) => async (dispatch) => {
  const response = await profileApi.updatePhoto(file)

  if (response.data.resultCode === 0) dispatch(updatePhotoSuccess(response.data.data.photos))
}

export default profileReducer