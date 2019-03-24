import React, { Component } from 'react';

const WhiskeyListContext = React.createContext({
    favoriteList: [],
    alreadyTried: [],
    wishList: [],
    setWhiskeyList: () => {},
    setError: () => {},
    clearError: () => {}
})
export default WhiskeyListContext;

export class WhiskeyListProvider extends Component {
  state = {
      favoriteList: [],
      alreadyTried: [],
      wishList: [],
      error: null
  } 
  setWhiskeyList = whiskeyList => {
    const favLst = whiskeyList.filter(whiskey => whiskey.listName === 'Favorite List')
    const alredyTriedLst = whiskeyList.filter(whiskey => whiskey.listName === 'Already Tried')
    const wishLst = whiskeyList.filter(whiskey => whiskey.listName === 'Wish List')
    this.setState({ favoriteList: favLst});
    this.setState({ alreadyTried: alredyTriedLst});
    this.setState({ wishList: wishLst });
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
        favoriteList: this.state.favoriteList,
        alreadyTried: this.state.alreadyTried,
        wishList: this.state.wishList,
        error: this.state.error,
        setError: this.setError,
        setWhiskeyList: this.setWhiskeyList,
        clearError: this.clearError
    }
    return (
      <WhiskeyListContext.Provider value={value}>
          {this.props.children}
      </WhiskeyListContext.Provider>
    )
  }
}
