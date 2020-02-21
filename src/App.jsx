import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Aside from './components/Aside/Aside'
import { DialogsContainer, Music, News, Profile, Settings } from './components/Pages'

import './App.sass'

const App = ({ store }) => {
  const DialogsPage = () => {
    return <DialogsContainer store={store} />
  }

  const ProfilePage = () => {
    return <Profile store={store} />
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
        <Aside data={store.getState().asidePage} />
      </div>
    </BrowserRouter>
  )
}

export default App
