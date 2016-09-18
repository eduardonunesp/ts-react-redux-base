import { post } from '../server/'

const LOGIN_ERR_MSG = `
  The username or password you have entered is invalid.
`

export function login(user): any {
  return new Promise((resolve, reject) => {
    return post('/auth/login', user)
    .then(json => resolve(json.meta))
    .then(null, (err) => reject(new Error(LOGIN_ERR_MSG)))
  })
}
