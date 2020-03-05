import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'


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
  auth: authReducer,
  form: formReducer
})

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ }) : compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)))

window.store = store

export default store