import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Redirects } from '../../../routes'

import Logo from '../../presentational/application/Logo'

import * as appActions from '../../../actions/app'

class LogoComponent extends Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick = (e) => {
    e.preventDefault()

    const { changePage, redirectToHome } = this.props

    redirectToHome()
    changePage()
  }

  render() {
    return(
      <Logo 
        handleClick={this.handleClick}
      />
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  changePage: () => Redirects.goToHome(),
  redirectToHome: () => appActions.goToHome()
}, dispatch)

export default connect(null, mapDispatchToProps)(LogoComponent)