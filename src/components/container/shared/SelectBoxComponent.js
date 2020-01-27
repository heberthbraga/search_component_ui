import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { push } from 'connected-react-router'

import * as productActions from '../../../actions/products'

import SelectBox from '../../presentational/shared/SelectBox'

class SelectBoxComponent extends Component {
  constructor(props) {
    super(props)

    this.handleSelect = this.handleSelect.bind(this)
  }

  handleSelect = (e) => {
    const { handleSortOption } = this.props

    const option = e.target.value

    if (option && option != '') {
      handleSortOption(option)
    }
  }

  componentWillReceiveProps(nextProps) {
    const { search, changePage } = this.props
    const { searchTerm, aggregation } = nextProps

    if (this.props.aggregation != nextProps.aggregation) {
      search(searchTerm, aggregation)
      changePage()
    }
  }

  render() {
    const { aggregation } = this.props

    const selected = aggregation && aggregation.sort_option ? aggregation.sort_option : ''

    return(
      <SelectBox 
        selected={selected}
        handleSelect={this.handleSelect}
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
  handleSortOption: (option) => productActions.handleSortOption(option), 
  search: (searchTerm, aggregation) => productActions.search(searchTerm, aggregation)
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(SelectBoxComponent)