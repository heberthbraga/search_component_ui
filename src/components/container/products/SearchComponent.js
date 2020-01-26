import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { push } from 'connected-react-router'

import * as actions from '../../../actions/products'

import SearchFrom from '../../presentational/forms/SearchForm'

class SearchComponent extends Component {
  constructor(props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const { search, changePage } = this.props

    let searchTerm = e.target.elements.term.value ? e.target.elements.term.value : ''

    search(searchTerm)
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
  searchTerm: state.products.searchTerm
})

const mapDispatchToProps = dispatch => bindActionCreators({
  changePage: () => push('/search'),
  search: (searchTerm) => actions.search(searchTerm)
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(SearchComponent)