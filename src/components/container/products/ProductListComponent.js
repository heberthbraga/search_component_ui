import React, { Component } from 'react'
import { connect } from 'react-redux'

import List from '../../presentational/content/products/List'

class ProductListComponent extends Component {
  render() {
    const { products, action, searchTerm } = this.props

    return (
      <List 
        products={products}
        action={action}
        searchTerm={searchTerm}
      />
    )
  }
}

const mapStateToProps = state => ({
  products: state.products.list,
  searchTerm: state.products.searchTerm
})

export default connect(mapStateToProps)(ProductListComponent)