import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import { Dialogs, Music, News, Profile, Settings } from './components/Pages'

import './App.sass'

const App = () => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper__content'>
          <Route path='/' exact component={Profile} />
          <Route path='/dialogs' component={Dialogs} />
          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/settings' component={Settings} />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
