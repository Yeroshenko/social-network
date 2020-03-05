import { profileApi } from "../api/api"

const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'


const initialState = {
  posts: [{
      id: 1,
      message: 'Hi, hoe are you?',
      likesCount: 12
    },
    {
      id: 2,
      message: "It's my first post",
      likesCount: 10
    },
    {
      id: 3,
      message: 'Hello world',
      likesCount: 228
    }
  ],
  profile: null,
  newPostText: '',
  status: ''
}

const profileReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_POST: {
      const newPost = {
        id: 4,
        message: state.newPostText,
        likesCount: 0
      }

      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: ''
      }
    }

    case UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        newPostText: action.newText
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

    default:
      return state
  }
}


// Action creators
export const addPost = () => ({ type: ADD_POST })
export const updateNewPostText = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setStatus = (status) => ({ type: SET_STATUS, status })


// Thank creators
export const getUserProfile = (userId) => (dispatch) => {
  profileApi.getProfile(userId)
    .then(response => {
      dispatch(setUserProfile(response.data))
    })
}

export const getStatus = (userId) => (dispatch) => {
  profileApi.getStatus(userId)
    .then (response => {
      dispatch(setStatus(response.data))
    })
}

export const updateStatus = (status) => (dispatch) => {
  profileApi.updateStatus(status)
    .then (response => {
      if (response.data.resultCode === 0) {
        dispatch(setStatus(status))
      }
    })
}


export default profileReducer