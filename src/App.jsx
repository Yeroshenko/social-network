import React, { PureComponent } from 'react'
import { connect, Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'

import { initializeApp } from './redux/app-reducer'
import store from './redux/redux-store'

import Header from './components/Header/Header'
import NavbarContainer from './components/Navbar/NavbarContainer'
import AsideContainer from './components/Aside/AsideContainer'
import {
  DialogsContainer,
  ProfileContainer,
  SettingsContainer,
  UsersContainer,
  LoginContainer
} from './components/Pages'
import { Loader } from './components/Ui'

import cls from './App.module.sass'

class App extends PureComponent {
  componentDidMount() {
    this.props.initializeApp()
  }

  render() {
    if (!this.props.initialized) return <Loader fullPage />

    return (
      <div className={cls.app}>
        <BrowserRouter>
          <Header />
          <NavbarContainer />
          <div className={cls.content}>
            <Route path='/profile/:userId?' component={ProfileContainer} />
            <Route path='/dialogs' component={DialogsContainer} />
            <Route path='/users' component={UsersContainer} />
            <Route path='/settings' component={SettingsContainer} />
            <Route path='/' exact component={LoginContainer} />
          </div>
          <AsideContainer />
        </BrowserRouter>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  initialized: state.app.initialized
})

const AppContainer = connect(mapStateToProps, { initializeApp })(App)

const SocialNetwork = () => (
  <Provider store={store}>
    <AppContainer />
  </Provider>
)

export default SocialNetwork
