import * as React from 'react'

export interface INavigationLink extends React.Props<any> {
  text: string
  handleClick?: (handler) => {}
  link?: string
  active?: boolean
}

export default function ({
  text,
  handleClick,
  link,
  active
}: INavigationLink): JSX.Element {
  return (
    <li className={active ? 'active' : ''}>
      <a href={link ? link : '#'} onClick={handleClick}>{text}
        {active ? <span className="sr-only">(current)</span> : null}
      </a>
    </li>
  )
}
