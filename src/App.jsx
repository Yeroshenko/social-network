import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import { Dialogs, Music, News, Profile, Settings } from './components/Pages'

import './App.sass'

const App = ({ state }) => {
  const DialogsPage = () => {
    return <Dialogs data={state.dialogsPage} />
  }

  const ProfilePage = () => {
    return <Profile data={state.profilePage} />
  }

  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper__content'>
          <Route path='/' exact component={ProfilePage} />
          <Route path='/dialogs' component={DialogsPage} />
          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/settings' component={Settings} />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
