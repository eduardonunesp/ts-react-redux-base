import * as React from 'react'
import Dropdown from './dropdown'
import Link from './link'
import LinkContainer from './link-container'

interface INavigation extends React.Props<any> {
  title: string
  inverse?: boolean
}

export default class Navigation extends React.Component<INavigation, any> {
  static Dropdown: any = Dropdown
  static Link: any = Link
  static LinkContainer: any = LinkContainer

  render(): JSX.Element {
    const {title, inverse, children} = this.props

    return (
      <nav className={`navbar navbar-default navbar-fixed-top ${inverse ? 'navbar-inverse' : ''}`}>
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <a className="navbar-brand" href="#">{title}</a>
          </div>

          <div className="collapse navbar-collapse">
            {children}
          </div>
        </div>
      </nav>
    )
  }
}
