import React, { Component } from 'react'
import { ConnectedRouter } from 'connected-react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { configureApi, resetApi } from './config/configureApi'

import * as productActions from './actions/products'
import { sortOptions } from './helpers'

import Routes from './routes'

class App extends Component {

  componentWillMount() {
    configureApi()

    const { aggregation } = this.props

    this.props.initAggregation(aggregation)
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

const mapStateToProps = state => ({
  aggregation: state.products.aggregation
})

const mapDispatchToProps = dispatch => bindActionCreators({
  initAggregation: (aggregation) => productActions.initAggregation(aggregation)
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App)