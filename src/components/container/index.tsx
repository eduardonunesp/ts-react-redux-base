import * as React from 'react'

interface INavigation extends React.Props<any> {
  style?: any
}

export default function ({
  style, children
}: INavigation): JSX.Element {
  return (
    <div className="container" style={style}>
      {children}
    </div>
  )
}
