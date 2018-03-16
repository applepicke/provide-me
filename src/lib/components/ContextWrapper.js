import React from 'react'

export class ContextWrapper extends React.Component {
  constructor(props) {
    super(props)
    this.state = props.state
  }

  render() {
    const { customContext, actions } = this.props
    const wrappedActions = {}

    Object.keys(actions).forEach(key => {
      wrappedActions[key] = (...args) => {
        return actions[key](
          newState => {
            this.setState(newState)
          },
          ...args
        )
      }
    })

    return (
      <customContext.Provider value={{
        state: this.state,
        actions: wrappedActions
      }}>
        {this.props.children}
      </customContext.Provider>
    )
  }
}
