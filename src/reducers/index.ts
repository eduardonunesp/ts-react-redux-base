import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'
import session from './session'
import config from './config'

const rootReducer = combineReducers({
  config,
  session,
  routing: routerReducer,
  form: formReducer
})

export default rootReducer
