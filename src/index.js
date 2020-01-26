import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { Provider } from 'react-redux'
import { AppContainer } from 'react-hot-loader'
import { PersistGate } from 'redux-persist/integration/react'
import { appStore, appPersistor, history } from './stores/appStore'

ReactDOM.render(
  <AppContainer>
    <Provider store={appStore}>
      <PersistGate loading={null} persistor={appPersistor}>
        <App history={history} />
      </PersistGate>
    </Provider>
  </AppContainer>
  , 
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
