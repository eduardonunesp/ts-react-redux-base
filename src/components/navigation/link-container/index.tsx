import * as React from 'react'

interface INavigationLinkContainer extends React.Props<any> {
  position?: 'right'|'left'
}

export default function ({
  children,
  position
}: INavigationLinkContainer): JSX.Element {
  return (
    <ul className={`nav navbar-nav ${position ? 'navbar-' + position : 'navbar-right'}`}>
      {children}
    </ul>
  )
}
