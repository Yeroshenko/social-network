import React from 'react'
import ReactDOM from 'react-dom'

import state from './redux/state'
import { subscribe, addPost, updateNewPostText } from './redux/state'

import App from './App'

import './index.sass'

const rerenderEntireTree = (state) => {
  const app = (
    <App 
      state={state} 
      addPost={addPost} 
      updateNewPostText={updateNewPostText} 
    /> 
  )

  ReactDOM.render(app, document.getElementById('root'))
}

rerenderEntireTree(state)

subscribe(rerenderEntireTree)