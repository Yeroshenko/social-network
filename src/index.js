import React from 'react'
import ReactDOM from 'react-dom'

import SocialNetwork from './App'

import './index.sass'

import * as serviceWorker from './serviceWorker'

const application = <SocialNetwork />

ReactDOM.render(application, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
