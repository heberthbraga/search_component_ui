import types from '../types'

const initialState={
  list: []
}

const reducer = (state=initialState, action) => {

  if (action.type === types.FETCH_COUNTRIES) {
    return {
      ...state,
      list: action.payload
    }
  }

  return state
}

export default reducer
