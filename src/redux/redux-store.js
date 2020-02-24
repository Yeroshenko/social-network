import { createStore, combineReducers } from 'redux'

import profileReducer from './profile-reducer'
import dialogsReducer from './dialogs-reducer'
import asideReducer from './aside-reducer'
import usersReducer from './users-reducer'

const reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  asidePage: asideReducer,
  usersPage: usersReducer
})

const store = createStore(reducers)

window.store = store

export default store