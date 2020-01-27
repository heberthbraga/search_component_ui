import types from '../types'

const initialState={
  list: [],
  searchTerm: '',
  aggregation: {
    price: [],
    country_code: [],
    sort_option: ''
  }
}

const reducer = (state=initialState, action) => {

  if (action.type === types.SEARCH_PRODUCTS) {
    return {
      ...state,
      list: action.payload
    }
  }

  if (action.type === types.SEARCH_TERM) {
    return {
      ...state,
      searchTerm: action.payload
    }
  }

  if (action.type === types.REDIRECT_TO_HOME) {
    const { routing } = state
    state = { routing } 
  }

  if (action.type === types.SORT_PRODUCTS) {
    return {
      ...state,
      aggregation: {
        ...state.aggregation,
        sort_option: action.payload
      }
    }
  }

  if (action.type === types.FILTER_PRODUCTS) {
    return {
      ...state,
      aggregation: { 
        ...state.aggregation,
        country_code: state.aggregation.country_code.concat(action.payload)
      }
    }
  }

  if (action.type === types.INIT_AGGREGATION) {
    return {
      ...state,
      aggregation: action.payload
    }
  }

  return state
}

export default reducer
