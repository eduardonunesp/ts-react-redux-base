import * as React from 'react'
import { ReactElement  } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import { configure } from '../../actions/config'

import {
  Navigation,
  Container
} from '../../components'

interface IAppProps extends React.Props<any> {
  config: any
  session: any
  router: any
  gotoPageMain: () => {}
  gotoPageAbout: () => {}
  configure: (payload) => {}
}

function mapStateToProps(state): any {
  return {
    config: state.config,
    session: state.session,
    router: state.router
  }
}

function mapDispatchToProps(dispatch): any {
  return {
    gotoPageMain: () => browserHistory.push('/main'),
    gotoPageAbout: () => browserHistory.push('about'),
    configure: (payload) => dispatch(configure(payload))
  }
}

class App extends React.Component<IAppProps, any> {
  render(): JSX.Element {
    const {
      config,
      children,
      gotoPageMain,
      gotoPageAbout
    } = this.props

    const style = {
      paddingTop: '70px'
    }

    return (
      <div>
        <Navigation title={config.get('title')} inverse={config.get('inverse')} >
          <Navigation.Dropdown title="Options">
            <Navigation.Link text="Sign In" handleClick={gotoPageMain} />
            <Navigation.Link text="About" handleClick={gotoPageAbout} />
          </Navigation.Dropdown>
          <Navigation.LinkContainer>
            <Navigation.Link text="About" handleClick={gotoPageAbout} />
          </Navigation.LinkContainer>
        </Navigation>
        <Container style={style}>
          {children}
        </Container>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
