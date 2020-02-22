import React from 'react'

import Aside from './Aside'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    data: state.asidePage 
  }
}

const AsideContainer = connect(mapStateToProps)(Aside)

export default AsideContainer
