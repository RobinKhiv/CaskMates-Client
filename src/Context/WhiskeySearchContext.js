import React, { Component } from 'react'

const WhiskeySearchContext = React.createContext({
  whiskeyList: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setWhiskeyList: () => {},
})
export default WhiskeySearchContext;

export class WhiskeySearchProvider extends Component {
  state = {
    whiskeyList: [],
    error: null,
  };

  setWhiskeyList = whiskeyList => {
    this.setState({ whiskeyList })
  }

  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  render() {
    const value = {
      whiskeyList: this.state.whiskeyList,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setWhiskeyList: this.setWhiskeyList,
    }
    return (
      <WhiskeySearchContext.Provider value={value}>
        {this.props.children}
      </WhiskeySearchContext.Provider>
    )
  }
}
 