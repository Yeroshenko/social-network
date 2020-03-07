import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Header from './components/Header/Header'
import NavbarContainer from './components/Navbar/NavbarContainer'
import AsideContainer from './components/Aside/AsideContainer'
import {
  DialogsContainer,
  Music,
  News,
  ProfileContainer,
  Settings,
  UsersContainer,
  LoginContainer
} from './components/Pages'

import './App.sass'

const App = () => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <NavbarContainer />
        <div className='app-wrapper__content'>
          <Route path='/profile/:userId?' component={ProfileContainer} />
          <Route path='/dialogs' component={DialogsContainer} />
          <Route path='/users' component={UsersContainer} />
          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/settings' component={Settings} />
          <Route path='/login' component={LoginContainer} />
        </div>
        <AsideContainer />
      </div>
    </BrowserRouter>
  )
}

export default App
