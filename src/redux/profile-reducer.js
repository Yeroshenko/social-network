const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'

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
  profile: {
    id: 1,
    name: 'Valeriy Yeroshenko',
    site: 'yeroshenko.github.io',
  },
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
      const stateCopy = {...state}

      stateCopy.posts = [...state.posts]
      stateCopy.posts.push(newPost)
      stateCopy.newPostText = ''

      return stateCopy
    }

    case UPDATE_NEW_POST_TEXT: {
      const stateCopy = {...state}

      stateCopy.newPostText = action.newText
      
      return stateCopy
    }
    
    default:
      return state

  }
}

export const addPostActionCreator = () => ({
  type: ADD_POST
})

export const updateNewPostTextActionCretor = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text
})

export default profileReducer