import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Redirects } from '../../../routes'
import * as productActions from '../../../actions/products'

import List from '../../presentational/content/products/List'

class ProductListComponent extends Component {
  constructor(props) {
    super(props)
  }

  onPageChange = (action) => (targetPage) => {
    const { changePage, search, searchTerm, aggregation } = this.props

    if (action === 'search' && targetPage) {
      search(searchTerm, aggregation, targetPage)
      changePage()
    }
  }

  render() {
    const { products, action, searchTerm } = this.props
    
    return (
      <List 
        products={products}
        action={action}
        searchTerm={searchTerm}
        onPageChange={this.onPageChange(action)}
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
  search: (searchTerm, aggregation, currentPage) => productActions.search(searchTerm, aggregation, currentPage)
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ProductListComponent)