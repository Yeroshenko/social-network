import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'

import { initializeApp } from './redux/app-reducer'

import Header from './components/Header/Header'
import NavbarContainer from './components/Navbar/NavbarContainer'
import AsideContainer from './components/Aside/AsideContainer'
import {
  DialogsContainer,
  // Music,
  // News,
  ProfileContainer,
  Settings,
  UsersContainer,
  LoginContainer
} from './components/Pages'
import { Loader } from './components/Ui'

import './App.sass'

class App extends Component {
  componentDidMount() {
    this.props.initializeApp()
  }

  render() {

    if (!this.props.initialized) return <Loader />

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
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default connect(mapStateToProps, { initializeApp })(App)
