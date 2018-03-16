import React from 'react'
import { Provider } from './Provider'

export const withProvider = (name, Component, options) => {
  const { initialState, actions } = options

  return class extends React.Component {
    render() {
      const { children, ...rest } = this.props

      return (
        <Provider
          name={name}
          initialState={initialState}
          actions={actions}
        >
          <Component {...rest}>
            {children}
          </Component>
        </Provider>
      )
    }
  }
}
