import types from '../types'

export const addCountryFilter = (type) => dispatch => ( dispatch({ type: types.ADD_COUNTRY_FILTER, payload: type }) )

export const addPriceFilter = (type) => dispatch => ( dispatch({ type: types.ADD_PRICE_FILTER, payload: type }) )

export const removeCountryFilter = (type) => dispatch => ( dispatch({ type: types.REMOVE_COUNTRY_FILTER, payload: type }) )

export const removePriceFilter = (type) => dispatch => ( dispatch({ type: types.REMOVE_PRICE_FILTER, payload: type }) )

