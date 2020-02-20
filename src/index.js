import React from 'react'
import ReactDOM from 'react-dom'

import store from './redux/state'
import App from './App'

import './index.sass'

const rerenderEntireTree = (state) => {
  const app = (
    <App 
      state={state} 
      dispatch={store.dispatch.bind(store)}
    /> 
  )

  ReactDOM.render(app, document.getElementById('root'))
}

rerenderEntireTree(store.getState())

store.subscribe(rerenderEntireTree)