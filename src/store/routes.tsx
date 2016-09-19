import * as React from 'react'
import { IndexRoute, Route } from 'react-router'

import App from '../containers/app'
import Main from '../containers/main'
import About from '../containers/about'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Main} />
    <Route path="/main" component={Main} />
    <Route path="/about" component={About} />
  </Route>
)
