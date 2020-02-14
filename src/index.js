import React from 'react'
import ReactDOM from 'react-dom'

import state from './redux/state'

import App from './App'

import './index.sass'

const app = <App state={state} />

ReactDOM.render(app, document.getElementById('root'))
