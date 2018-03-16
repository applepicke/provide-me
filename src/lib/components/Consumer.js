import React from 'react'
import { getContext } from './ContextCreator'

export class Consumer extends React.Component {
  render() {
    const { children, name } = this.props
    const context = getContext(name)

    return (
      <context.Consumer>
        {children}
      </context.Consumer>
    )
  }
}
