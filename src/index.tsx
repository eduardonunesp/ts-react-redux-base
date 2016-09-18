import 'babel-polyfill'
import 'ts-helpers'
import './styles/index.scss'

import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

declare const __TEST__: boolean
declare const __DEV__: boolean

if (__DEV__) {
  // Debug
  window['React'] = React
}

import routes from './store/routes'
import configureStore from './store/configure-store'

const store = configureStore({})
const history = syncHistoryWithStore(browserHistory, store)

if (!__TEST__) {
  ReactDOM.render(
    <div>
      <Provider store={store}>
        <Router history={history}>
            {routes}
        </Router >
      </Provider>
    </div>,
    document.getElementById('appRoot')
  )
}
