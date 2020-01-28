import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { push } from 'connected-react-router'

import CustomCheckbox from '../../presentational/shared/CustomCheckbox'

import * as productActions from '../../../actions/products'
import * as filterActions from '../../../actions/filter'

class CheckboxComponent extends Component {
  constructor(props) {
    super(props)

    this.handleFilter = this.handleFilter.bind(this)
  }

  handleCountryFilter = (e) => {
    let type = e.target.value
    
    if (e.target.checked) {
      this.props.addCountryFilter(type)
    } else {
      console.log(type)
      this.props.removeCountryFilter(type)
    }
  }

  handlePriceFilter = (e) => {
    let type = e.target.value
    
    if (e.target.checked) {
      this.props.addPriceFilter(type)
    } else {
      this.props.removePriceFilter(type)
    }
  }

  handleFilter = (name) => (e) => {
    if (name === 'country_code') {
      this.handleCountryFilter(e)
    } else if (name === 'price') {
      this.handlePriceFilter(e)
    }
  }

  render() {
    const { name, label, value } = this.props

    return(
      <CustomCheckbox 
        name={name}
        label={label}
        value={value}
        handleChange={this.handleFilter(name)}
      />
    )
  }
}

const mapStateToProps = state => ({
  searchTerm: state.products.searchTerm,
  aggregation: state.products.aggregation
})

const mapDispatchToProps = dispatch => bindActionCreators({
  changePage: () => push('/search'),
  addPriceFilter: (type) => filterActions.addPriceFilter(type),
  removePriceFilter: (type) => filterActions.removePriceFilter(type),
  addCountryFilter: (type) => filterActions.addCountryFilter(type),
  removeCountryFilter: (type) => filterActions.removeCountryFilter(type),
  search: (searchTerm, aggregation) => productActions.search(searchTerm, aggregation)
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(CheckboxComponent)