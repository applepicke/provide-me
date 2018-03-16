import React from 'react'
import { Consumer } from './Consumer'

export const withConsumer = (name, Component) => {
  return class extends React.Component {
    render() {
      const { children, ...rest } = this.props

      return (
        <Consumer name={name}>
          {({ state, actions }) => {
            return (
              <Component {...rest} {...state} actions={actions}>
                {children}
              </Component>
            )
          }}
        </Consumer>
      )
    }
  }
}
