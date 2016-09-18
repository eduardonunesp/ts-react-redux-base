import {
  createStore,
  applyMiddleware,
  compose,
  Middleware,
  Store
} from 'redux'
import { fromJS } from 'immutable'
import { browserHistory } from 'react-router'
import { routerMiddleware } from 'react-router-redux'

import thunk from 'redux-thunk'

const persistState = require('redux-localstorage')

import promiseMiddleware from '../middleware/promise-middleware'
import logger from './logger'
import rootReducer from '../reducers'

declare const __DEV__: boolean // from webpack

function configureStore(initialState): Store<any> {
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(..._getMiddleware()),
      persistState('session', _getStorageConfig()),
      f => f)
    )

  _enableHotLoader(store)
  return store
}

function _getMiddleware(): Middleware[] {
  let middleware = [
    routerMiddleware(browserHistory),
    promiseMiddleware,
    thunk,
  ]

  if (__DEV__) {
    middleware = [...middleware, logger]
  }

  return middleware
}

function _enableHotLoader(store): any {
  if (!__DEV__) {
    return
  }

  const { hot } = module as any
  if (hot) {
    hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers')
      store.replaceReducer(nextRootReducer)
    })
  }
}

function _getStorageConfig(): any {
  return {
    key: 'typescript-react-redux-seed',
    serialize: (store) => {
      return store && store.session ?
        JSON.stringify(store.session.toJS()) : store
    },
    deserialize: (state) => ({
      session: state ? fromJS(JSON.parse(state)) : fromJS({}),
    }),
  }
}

export default configureStore
