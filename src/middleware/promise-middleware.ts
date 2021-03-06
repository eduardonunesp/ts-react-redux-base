import isPromise from '../utils/is-promise'
import 'core-js/modules/es6.object.assign'

export default function promiseMiddleware({ dispatch }): any {
  return next => action => {
    if (!isPromise(action.payload)) {
      return next(action)
    }

    const { types, payload, meta } = action
    const { promise, data } = payload
    const [ PENDING, FULFILLED, REJECTED ] = types

   /**
    * Dispatch the pending action
    */
    dispatch( Object.assign({},
      { type: PENDING },
      data ? { payload: data } : {},
      meta ? { meta } : {}
    ))

    /**
     * If successful, dispatch the fulfilled action, otherwise dispatch
     * rejected action.
     */
    return promise.then(
      result => {
        dispatch({
          type: FULFILLED,
          payload: result,
          meta,
        })
      },
      error => {
        dispatch({
          type: REJECTED,
          payload: error,
          meta,
        })
      }
    )
  }
}
