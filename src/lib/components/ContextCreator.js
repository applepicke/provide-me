import React from 'react'
import { ContextWrapper } from './ContextWrapper'

const _contextMap = {}

export const getContext = name => {
  const existingContext = _contextMap[name]
  _contextMap[name] = existingContext ? existingContext : React.createContext(name)
  return _contextMap[name]
}

export const ContextCreator = {
  createContext: options => {
    const { name } = options
    const newContext = name ? getContext(name) : React.createContext()

    return {
      Provider: props => (
        <ContextWrapper
          actions={options.actions}
          customContext={newContext}
          state={options.state}
        >
          {props.children}
        </ContextWrapper>
      ),
      Consumer: newContext.Consumer
    }
  }
}
