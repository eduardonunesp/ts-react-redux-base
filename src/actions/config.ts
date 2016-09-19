import { CONFIGURE } from '../constants'

export function configure(payload): any {
  return {
    type: CONFIGURE,
    payload
  }
}
