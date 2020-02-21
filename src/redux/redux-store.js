import { createStore, combineReducers } from 'redux'

import profileReducer from './profile-reducer'
import dialogsReducer from './dialogs-reducer'
import asideReducer from './aside-reducer'

const reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  asidePage: asideReducer
})

const store = createStore(reducers)

export default store