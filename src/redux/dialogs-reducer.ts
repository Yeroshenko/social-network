const SEND_MESSAGE = 'DIALOGS/SEND_MESSAGE'

type DialogType = {
  id: number
  name: string
}

type MessageType = {
  id: number
  message: string
}

const initialState = {
  messages: [
    { id: 1, message: 'Hi!' },
    { id: 2, message: 'Whats Upppp' },
    { id: 3, message: 'Yoooooooooo' }
  ] as Array<MessageType>,
  dialogs: [
    { id: 1, name: 'Name' },
    { id: 2, name: 'Namee' },
    { id: 3, name: 'Nameee' },
    { id: 4, name: 'Nameeee' },
    { id: 5, name: 'Nameeeee' },
    { id: 6, name: 'Nameeeeee' }
  ] as Array<DialogType>
}

export type InitialStateType = typeof initialState

const dialogsReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {

    case SEND_MESSAGE:
      return {
        ...state,
        messages: [
          ...state.messages, { id: 4, message: action.message }
        ]
      }

    default:
      return state
  }
}

type SendMessageType = {
  type: typeof SEND_MESSAGE
  message: string
}

export const sendMessage = (message: string): SendMessageType => ({ type: SEND_MESSAGE, message })


export default dialogsReducer
