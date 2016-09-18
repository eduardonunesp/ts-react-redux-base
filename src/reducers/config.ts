import { CONFIGURE } from '../constants'
import { fromJS } from 'immutable'

const INITIAL_STATE = fromJS({
  title: 'React/Redux/TS'
})

function config(state = INITIAL_STATE, action = { type: '' }): any {
  switch (action.type) {
    case CONFIGURE:
      return state
    default:
      return state
  }
}

export default config
