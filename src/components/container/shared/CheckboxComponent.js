import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { push } from 'connected-react-router'

import CustomCheckbox from '../../presentational/shared/CustomCheckbox'

import * as productActions from '../../../actions/products'

class CheckboxComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      checked: false
    }
  }

  handleCheckboxChange = (e) => {
    // const checked = e.target.checked

    // this.setState({ checked: checked })

    // if (checked) {
    //   const { searchTerm, search, changePage } = this.props
    //   let aggregation = {}

    //   aggregation[e.target.name] = e.target.value

    //   search(searchTerm, aggregation)
    //   changePage()
    // }

    const { handleFilter } = this.props

    const value = e.target.value
    const checked = e.target.checked

    if (checked) {
      this.setState({ checked })
      handleFilter(value)
    }
  }

  componentWillReceiveProps(nextProps) {
    // console.log("nextProps", nextProps)
  }

  render() {
    const { name, label, value } = this.props
    const { checked } = this.state

    return(
      <CustomCheckbox 
        name={name}
        label={label}
        value={value}
        checked={checked}
        handleChange={this.handleCheckboxChange}
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
  handleFilter: (value) => productActions.handleFilter(value),
  search: (searchTerm, aggregation) => productActions.search(searchTerm, aggregation)
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(CheckboxComponent)