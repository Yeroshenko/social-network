import { connect } from 'react-redux'

import Aside from './Aside'

const mapStateToProps = state => {
  return {
    data: state.asidePage
  }
}

const AsideContainer = connect(mapStateToProps)(Aside)

export default AsideContainer
