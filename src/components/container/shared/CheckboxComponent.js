import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { push } from 'connected-react-router'

import Checkbox from '../../presentational/shared/Checkbox'

import * as productActions from '../../../actions/products'

class CheckboxComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      checked: false
    }
  }

  handleCheckboxChange = e => {
    const { searchTerm, search, changePage } = this.props

    let aggregation = {}

    aggregation[e.target.name] = e.target.value

    this.setState({ checked: e.target.checked })

    search(searchTerm, aggregation)
    changePage()
  }

  render() {
    const { className, label, value } = this.props

    return(
      <Checkbox
        className={className}
        label={label}
        value={value}
        checked={this.state.checked}
        onChange={this.handleCheckboxChange}
      />
    )
  }
}

const mapStateToProps = state => ({
  searchTerm: state.products.searchTerm
})

const mapDispatchToProps = dispatch => bindActionCreators({
  changePage: () => push('/search'),
  search: (searchTerm, aggregation) => productActions.search(searchTerm, aggregation)
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(CheckboxComponent)