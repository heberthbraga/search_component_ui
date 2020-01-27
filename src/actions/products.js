import types from '../types'

import ProductsApiService from '../api/products'

export const search = (searchTerm, aggregation) => dispatch => {
  console.log("Start searching term and aggregation ", searchTerm + ', ' + JSON.stringify(aggregation))

  dispatch({ type: types.SEARCH_TERM, payload: searchTerm })

  ProductsApiService.search(searchTerm, aggregation).then(
    res => {
      console.log("Search response: ", res)

      dispatch({ type: types.SEARCH_PRODUCTS, payload: res })
    }
  )
}

export const handleSortOption = (option) => dispatch => ( dispatch({ type: types.SORT_PRODUCTS, payload: option }) )

export const handleFilter = (value) => dispatch => ( dispatch({ type: types.FILTER_PRODUCTS, payload: value }) )

export const initAggregation = (aggregation) => dispatch => ( dispatch({ type: types.INIT_AGGREGATION, payload: aggregation }) )