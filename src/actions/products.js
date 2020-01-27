import types from '../types'

import ProductsApiService from '../api/products'

export const search = (searchTerm, aggregation={}) => dispatch => {
  console.log("Start searching term: ", searchTerm)

  dispatch({ type: types.SEARCH_TERM, payload: searchTerm })

  ProductsApiService.search(searchTerm, aggregation).then(
    res => {
      console.log("Search response: ", res)

      dispatch({ type: types.SEARCH_PRODUCTS, payload: res })
    }
  )
}