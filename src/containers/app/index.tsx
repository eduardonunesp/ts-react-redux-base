import * as React from 'react'
import { ReactElement  } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'

interface IAppProps extends React.Props<any> {
  config: any
  session: any
  router: any
}

function mapStateToProps(state): any {
  return {
    config: state.config,
    session: state.session,
    router: state.router
  }
}

function mapDispatchToProps(dispatch): any {
  return {}
}

class App extends React.Component<IAppProps, any> {
  render(): JSX.Element {
    const { config } = this.props

    return (
      <h1>Hello React: {config.get('title')}</h1>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
