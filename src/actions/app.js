import types from '../types'

export const goToHome = () => dispatch => ( dispatch({ type: types.REDIRECT_TO_HOME, payload: true }) )