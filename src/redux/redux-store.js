import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'


import profileReducer from './profile-reducer'
import dialogsReducer from './dialogs-reducer'
import asideReducer from './aside-reducer'
import usersReducer from './users-reducer'
import authReducer from './auth-reducer'

const reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  asidePage: asideReducer,
  usersPage: usersReducer,
  auth: authReducer 
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store

export default store