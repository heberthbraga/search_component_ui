import types from '../types'

import CountriesApiService from '../api/countries'

export const fetchCountries = () => dispatch => {
  console.log("Fetching Countries ")

  CountriesApiService.list().then(
    res => {
      console.log("Countries: ", res)

      dispatch({ type: types.FETCH_COUNTRIES, payload: res })
    }
  )
}