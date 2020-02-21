import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Aside from './components/Aside/Aside'
import { Dialogs, Music, News, Profile, Settings } from './components/Pages'

import './App.sass'

const App = ({ state, dispatch }) => {
  debugger
  const DialogsPage = () => {
    return <Dialogs state={state.dialogsPage} dispatch={dispatch} />
  }

  const ProfilePage = () => {
    return <Profile profilePage={state.profilePage} dispatch={dispatch} />
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
        <Aside data={state.asidePage} />
      </div>
    </BrowserRouter>
  )
}

export default App
