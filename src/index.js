import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

import './index.sass'

const postData = [
  { id: 1, message: 'Hi, hoe are you?', likesCount: 12 },
  { id: 2, message: "It's my first post", likesCount: 10 },
  { id: 3, message: 'Hello world', likesCount: 228 }
]

const dialogsData = [
  { id: 1, name: 'Name' },
  { id: 2, name: 'Namee' },
  { id: 3, name: 'Nameee' },
  { id: 4, name: 'Nameeee' },
  { id: 5, name: 'Nameeeee' },
  { id: 6, name: 'Nameeeeee' }
]
const messagesData = [
  { id: 1, message: 'Hi!' },
  { id: 2, message: 'Whats Upppp' },
  { id: 3, message: 'Yoooooooooo' }
]

const app = (
  <App 
    postData={postData}
    dialogsData={dialogsData}
    messagesData={messagesData} />
)

ReactDOM.render(app, document.getElementById('root'))