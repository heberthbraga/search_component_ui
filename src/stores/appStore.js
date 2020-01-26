import reduxThunk from 'redux-thunk'
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

import { isDevelopment } from '../helpers'

import products from '../reducers/products'

export const history = createBrowserHistory()

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  products
})

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, createRootReducer(history))

let store = createStore(
  persistedReducer, 
  compose(
    applyMiddleware(
      routerMiddleware(history),
      reduxThunk
    )
  )
)

if(isDevelopment){
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  store = createStore(
    persistedReducer, 
    composeEnhancers(
      compose(
        applyMiddleware(
          routerMiddleware(history),
          reduxThunk
        )
      )
    )
  )
}

export const appStore = store
export const appPersistor = persistStore(store)
