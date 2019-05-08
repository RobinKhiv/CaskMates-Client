import React, { Component } from 'react'

const WhiskeySearchContext = React.createContext({
  whiskeyList: [],
  whiskeyFilter: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setWhiskeyList: () => {},
  filterWhiskeyList: () => {}
})
export default WhiskeySearchContext;

export class WhiskeySearchProvider extends Component {
  state = {
    whiskeyList: [],
    whiskeyFilter: [],
    error: null,
  };

  setWhiskeyList = whiskeyList => {
    this.setState({ 
      whiskeyList, 
      whiskeyFilter: whiskeyList 
    })
  }

  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }
  filterWhiskeyList = filter => {
    const searchFilter = this.state.whiskeyList.filter(
      whiskey => whiskey.whiskey_name.toLowerCase().includes(filter));
    this.setState({whiskeyFilter: searchFilter})
  }

  render() {
    const value = {
      whiskeyList: this.state.whiskeyList,
      whiskeyFilter: this.state.whiskeyFilter,
      isSearching: this.state.isSearching,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setWhiskeyList: this.setWhiskeyList,
      filterWhiskeyList: this.filterWhiskeyList,
    }
    return (
      <WhiskeySearchContext.Provider value={value}>
        {this.props.children}
      </WhiskeySearchContext.Provider>
    )
  }
}
 