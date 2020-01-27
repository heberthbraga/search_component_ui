import types from '../types'

const initialState={
  list: [],
  searchTerm: ''
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

  return state
}

export default reducer
