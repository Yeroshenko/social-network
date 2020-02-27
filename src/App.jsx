import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import AsideContainer from './components/Aside/AsideContainer'
import {
  DialogsContainer,
  Music,
  News,
  ProfileContainer,
  Settings,
  UsersContainer,
} from './components/Pages'

import './App.sass'

const App = () => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper__content'>
          <Route path='/profile/:userId?' component={ProfileContainer} />
          <Route path='/dialogs' component={DialogsContainer} />
          <Route path='/users' component={UsersContainer} />
          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/settings' component={Settings} />
        </div>
        <AsideContainer />
      </div>
    </BrowserRouter>
  )
}

export default App
