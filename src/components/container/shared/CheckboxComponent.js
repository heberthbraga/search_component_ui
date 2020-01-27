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
      checkedItems: new Map()
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

    const item = e.target.name
    const checked = e.target.checked

    this.setState(prevState => ({ checkedItems: prevState.checkedItems.set(item, checked) }))
  }

  render() {
    const { name, label, value } = this.props

    return(
      <CustomCheckbox 
        name={name}
        label={label}
        value={value}
        checked={this.state.checkedItems.get(name)}
        handleChange={this.handleCheckboxChange}
      />
      // <Checkbox
      //   className={className}
      //   label={label}
      //   value={value}
      //   checked={this.state.checked}
      //   onChange={this.handleCheckboxChange}
      // />
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