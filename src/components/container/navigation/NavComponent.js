import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as countryActions from '../../../actions/countries'

import Nav from '../../presentational/navigation/Nav'

class NavComponent extends Component {

  componentWillMount() {
    this.props.fetchCountries()
  }

  render() {
    const { countries } = this.props

    return(
      <Nav 
        countries={countries}
      />
    )
  }
}

const mapStateToProps = state => ({
  countries: state.countries.list,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchCountries: () => countryActions.fetchCountries()
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(NavComponent)