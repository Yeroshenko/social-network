const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'

const initialState = {
  messages: [{
      id: 1,
      message: 'Hi!'
    },
    {
      id: 2,
      message: 'Whats Upppp'
    },
    {
      id: 3,
      message: 'Yoooooooooo'
    }
  ],
  dialogs: [{
      id: 1,
      name: 'Name'
    },
    {
      id: 2,
      name: 'Namee'
    },
    {
      id: 3,
      name: 'Nameee'
    },
    {
      id: 4,
      name: 'Nameeee'
    },
    {
      id: 5,
      name: 'Nameeeee'
    },
    {
      id: 6,
      name: 'Nameeeeee'
    }
  ],
  newMessageBody: ''
}

const dialogsReducer = (state = initialState, action) => {

  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      return {
        ...state,
        newMessageBody: action.body
      }

    case SEND_MESSAGE:
      const body = state.newMessageBody

      return {
        ...state,
        newMessageBody: '',
        messages: [...state.messages, {
          id: 4,
          message: body
        }]
      }

    default:
      return state
  }
}

export const sendMessage = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBody = (text) => ({ type: UPDATE_NEW_MESSAGE_BODY, body: text })

export default dialogsReducer