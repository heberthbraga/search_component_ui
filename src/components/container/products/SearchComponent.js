import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Redirects } from '../../../routes'

import * as actions from '../../../actions/products'

import SearchFrom from '../../presentational/forms/SearchForm'

class SearchComponent extends Component {
  constructor(props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this)
  }
  
  handleSubmit = (e) => {
    e.preventDefault()

    const { search, changePage, aggregation } = this.props

    let searchTerm = e.target.elements.term.value ? e.target.elements.term.value : ''

    search(searchTerm, aggregation)
    changePage()
  }

  openDetails = () => {
    return 'details'
  }

  render() {
    const { searchTerm } = this.props

    return (
      <SearchFrom 
        handleSubmit={this.handleSubmit}
        searchTerm={searchTerm}
      />
    )
  }
}

const mapStateToProps = state => ({
  products: state.products.list,
  searchTerm: state.products.searchTerm,
  aggregation: state.products.aggregation
})

const mapDispatchToProps = dispatch => bindActionCreators({
  changePage: () => Redirects.gotToSearch(),
  search: (searchTerm, aggregation) => actions.search(searchTerm, aggregation)
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(SearchComponent)