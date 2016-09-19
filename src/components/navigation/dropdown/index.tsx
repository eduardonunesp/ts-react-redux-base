import * as React from 'react'
import { browserHistory } from 'react-router'
const enhanceWithClickOutside = require('react-click-outside')

interface INavigationDropdown extends React.Props<any> {
  title: string
  position?: 'right' | 'left'
  active?: boolean
}

const NavigationDropdown = class NavigationDropdown extends React.Component<INavigationDropdown, any> {
  constructor(props) {
    super(props)

    this.state = {
      open: false
    }
  }

  componentDidMount(): void {
    browserHistory.listen((): void => {
      this.setState({ open: false })
    })
  }

  toggleMenu = (): void => {
    this.setState({ open: !this.state.open })
  }

  handleClickOutside = (): void => {
    this.setState({ open: false })
  }

  render(): JSX.Element {
    const {
      title,
      position,
      children
    } = this.props

    return (
      <ul className={`nav navbar-nav ${position ? 'navbar-' + position : 'navbar-right'}`}>
        <li className={`dropdown ${this.state.open ? 'open' : ''}`}>
          <a href="#" onClick={this.toggleMenu} className="dropdown-toggle">{title} <span className="caret" /></a>
          <ul className="dropdown-menu">
            {children}
          </ul>
        </li>
      </ul>
    )
  }
}

export default enhanceWithClickOutside(NavigationDropdown)
