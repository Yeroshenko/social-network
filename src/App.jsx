import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'

import { initializeApp } from './redux/app-reducer'

import Header from './components/Header/Header'
import NavbarContainer from './components/Navbar/NavbarContainer'
import AsideContainer from './components/Aside/AsideContainer'
import { DialogsContainer, ProfileContainer, Settings, UsersContainer, LoginContainer } from './components/Pages'
import { Loader } from './components/Ui'

import cls from './App.module.sass'

class App extends Component {
  componentDidMount() {
    this.props.initializeApp()
  }

  render() {

    if (!this.props.initialized) return <Loader />

    return (
      <BrowserRouter>
        <div className={cls.wrapper}>
          <Header />
          <NavbarContainer />
          <div className={cls.content}>
            <Route path='/profile/:userId?' component={ProfileContainer} />
            <Route path='/dialogs' component={DialogsContainer} />
            <Route path='/users' component={UsersContainer} />
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
