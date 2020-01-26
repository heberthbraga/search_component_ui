import React, { Component } from 'react'
import { connect } from 'react-redux'

import List from '../../presentational/content/products/List'

class ProductListComponent extends Component {
  render() {
    const { products } = this.props

    return (
      <List 
        products={products}
      />
    )
  }
}

const mapStateToProps = state => ({
  products: state.products.list
})

export default connect(mapStateToProps)(ProductListComponent)