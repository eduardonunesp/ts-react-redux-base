import * as fetch from 'whatwg-fetch'

export const BASE_URL = '/api'

export function post(path, data): any {
  return fetch(BASE_URL + path, {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json())
}
