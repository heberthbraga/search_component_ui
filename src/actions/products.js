import types from '../types'

import ProductsApiService from '../api/products'

export const search = (searchTerm, aggregation, currentPage='1') => dispatch => {
  console.log("Start searching term, aggregation and page", searchTerm + ', ' + JSON.stringify(aggregation) + ', ' + currentPage)

  dispatch({ type: types.SEARCH_TERM, payload: searchTerm })

  ProductsApiService.search(searchTerm, aggregation, currentPage).then(
    res => {
      console.log("Search response: ", res)

      dispatch({ type: types.SEARCH_PRODUCTS, payload: res })
    }
  )
}

export const handleSortOption = (option) => dispatch => ( dispatch({ type: types.SORT_PRODUCTS, payload: option }) )

export const initAggregation = (aggregation) => dispatch => ( dispatch({ type: types.INIT_AGGREGATION, payload: aggregation }) )