import React from 'react'
import { ContextCreator } from './ContextCreator'

export class Provider extends React.Component {
  render() {
    const { children, name, initialState, actions } = this.props

    const context = ContextCreator.createContext({
      name, state: initialState, actions
    })

    return (
      <context.Provider>
        {children}
      </context.Provider>
    )
  }
}
