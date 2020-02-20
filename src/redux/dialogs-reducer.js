const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'

const dialogsReducer = (state, action) => {

  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.body
      return state

    case SEND_MESSAGE:
      const body = state.newMessageBody

      state.newMessageBody = ''
      state.messages.push({
        id: 4,
        message: body
      })
      return state

    default:
      return state
  }
}

export const sendMessageCreator = () => ({
  type: SEND_MESSAGE
})

export const updateNewMessageBodyCretor = (text) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: text
})

export default dialogsReducer