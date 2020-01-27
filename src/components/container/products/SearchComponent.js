import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { push } from 'connected-react-router'

import * as actions from '../../../actions/products'

import SearchFrom from '../../presentational/forms/SearchForm'

import { sortOptions } from '../../../helpers'

class SearchComponent extends Component {
  constructor(props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentWillMount() {
    this.props.handleSortOption(sortOptions.default.value)
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const { search, changePage, aggregation } = this.props

    let searchTerm = e.target.elements.term.value ? e.target.elements.term.value : ''

    console.log(aggregation)

    search(searchTerm, aggregation)
    changePage()
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
  changePage: () => push('/search'),
  handleSortOption: (option) => actions.handleSortOption(option),
  search: (searchTerm, aggregation) => actions.search(searchTerm, aggregation)
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(SearchComponent)