import React, { Component } from 'react';

const WhiskeyListContext = React.createContext({
    showAddMenu: null,
    favoriteList: [],
    alreadyTried: [],
    wishList: [],
    setWhiskeyList: () => {},
    setError: () => {},
    clearError: () => {},
    removeFromList: () => {}
})
export default WhiskeyListContext;

export class WhiskeyListProvider extends Component {
  state = {
      showAddMenu: null,
      favoriteList: [],
      alreadyTried: [],
      wishList: [],
      error: null
  } 
  setWhiskeyList = whiskeyList => {
    const favLst = whiskeyList.filter(whiskey => whiskey.listName === 'Favorite List')
    const alredyTriedLst = whiskeyList.filter(whiskey => whiskey.listName === 'Already Tried')
    const wishLst = whiskeyList.filter(whiskey => whiskey.listName === 'Wish List')
    this.setState({ 
      favoriteList: favLst,
      alreadyTried: alredyTriedLst,
      wishList: wishLst 
    });

  }
  removeWhiskeyFromState = list_id =>  {
    const stateCopy = {...this.state};
    Object.keys(stateCopy).forEach(val => {
      if(stateCopy[val] instanceof Array) 
        stateCopy[val] = stateCopy[val].filter(v => v.id !== list_id)
    });
    this.setState(stateCopy)
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
        showAddMenu: null,
        favoriteList: this.state.favoriteList,
        alreadyTried: this.state.alreadyTried,
        wishList: this.state.wishList,
        error: this.state.error,
        setError: this.setError,
        setWhiskeyList: this.setWhiskeyList,
        clearError: this.clearError,
        removeWhiskeyFromState: this.removeWhiskeyFromState
    }
    
    return (
      <WhiskeyListContext.Provider value={value}>
          {this.props.children}
      </WhiskeyListContext.Provider>
    )
  }
}
