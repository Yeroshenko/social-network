import { getAuthUserData } from './auth-reducer'

const INITIALIZED_SUCCESS = 'APP/INITIALIZED_SUCCESS'

export type InitialStateType = { initialized: boolean }

const initialState: InitialStateType = { initialized: false }

const appReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true
      }

    default:
      return state
  }
}

type  InitializedSuccessActionType = {
  type: typeof INITIALIZED_SUCCESS // 'APP:INITIALIZED_SUCCESS'
} 

export const initializedSuccess = () => ({ type: INITIALIZED_SUCCESS })

export const initializeApp = () => (dispatch: any) => {
  const promise = dispatch(getAuthUserData())

  Promise.all([promise]).then(() => {
    dispatch(initializedSuccess())
  })
}

export default appReducer
