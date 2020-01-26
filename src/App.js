import React, { Component } from 'react'
import { ConnectedRouter } from 'connected-react-router'

import { configureApi, resetApi } from './config/configureApi'

import Routes from './routes'

class App extends Component {

  componentWillMount() {
    configureApi()
  }

  componentWillUnmount() {
    resetApi()
  }

  render () {
    return (
      <ConnectedRouter
        history={this.props.history}
      >
        <Routes />
      </ConnectedRouter>
    )
  }
}

export default App