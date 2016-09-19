import { CONFIGURE } from '../constants'
import { fromJS } from 'immutable'

const INITIAL_STATE = fromJS({
  title: 'React/Redux/TS',
  inverse: true
})

function config(state = INITIAL_STATE, action): any {
  switch (action.type) {
    case CONFIGURE:
      return state.merge(fromJS({
        inverse: action.payload.inverse
      }))
    default:
      return state
  }
}

export default config
