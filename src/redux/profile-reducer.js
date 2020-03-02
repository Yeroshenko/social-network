import { profileApi } from "../api/api"

const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

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
  newPostText: ''
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

    default:
      return state
  }
}


// Action creators
export const addPost = () => ({ type: ADD_POST })
export const updateNewPostText = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })
export const setUserProfileInfo = (profile) => ({ type: SET_USER_PROFILE, profile })


// Thank creators
export const setUserProfile = (userId) => {
  return (dispatch) => {
    profileApi.getProfile(userId)
      .then(response => {
        dispatch(setUserProfileInfo(response.data))
      })
  }
}

export default profileReducer