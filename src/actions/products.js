import types from '../types'

import ProductsApiService from '../api/products'

export const search = (searchTerm) => dispatch => {
  console.log("Start searching term: ", searchTerm)

  dispatch({ type: types.SEARCH_TERM, payload: searchTerm })

  ProductsApiService.search(searchTerm).then(
    res => {
      console.log("Search response: ", res)

      dispatch({ type: types.SEARCH_PRODUCTS, payload: res })
    }
  )
}