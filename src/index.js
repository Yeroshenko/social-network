import React from 'react'
import ReactDOM from 'react-dom'

import store from './redux/redux-store'
import App from './App'

import './index.sass'

const rerenderEntireTree = (state) => {
  const app = (
    <App 
      state={state} 
      store={store}
      dispatch={store.dispatch.bind(store)}
    /> 
  )

  ReactDOM.render(app, document.getElementById('root'))
}

rerenderEntireTree(store.getState())

store.subscribe(() => {
  const state = store.getState()
  rerenderEntireTree(state)
})