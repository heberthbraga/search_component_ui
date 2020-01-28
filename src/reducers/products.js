import types from '../types'

const initialState={
  list: [],
  searchTerm: '',
  aggregation: {
    price_option: [],
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

  if (action.type === types.ADD_COUNTRY_FILTER) {
    return {
      ...state,
      aggregation: {
        country_code: [
          ...state.aggregation.country_code,
          action.payload
        ],
        price_option: [
          ...state.aggregation.price_option
        ]
      }
    }
  }

  if (action.type === types.REMOVE_COUNTRY_FILTER) {
    const newCountryFilter = state.aggregation.country_code.filter((code) => code !== action.payload)
    
    return {
      ...state,
      aggregation: {
        country_code: newCountryFilter,
        price_option: [
          ...state.aggregation.price_option
        ]
      }
    }
  }

  if (action.type === types.ADD_PRICE_FILTER) {
    return {
      ...state,
      aggregation: {
        country_code: [
          ...state.aggregation.country_code,
        ],
        price_option: [
          ...state.aggregation.price_option,
          action.payload
        ]
      }
    }
  }

  if (action.type === types.REMOVE_PRICE_FILTER) {
    const newPriceFilter = state.aggregation.price_option.filter((value) => value !== action.payload)
    
    return {
      ...state,
      aggregation: {
        country_code: [
          ...state.aggregation.country_code
        ],
        price_option: newPriceFilter
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
