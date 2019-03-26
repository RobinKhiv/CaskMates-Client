import React, {Component} from 'react';

const WhiskeyContext = React.createContext({
    Whiskey: {},
    reviews: [],
    error: null,
    isLoggedIn: null,
    setError: () => {},
    clearError: () => {},
    setThing: () => {},
    clearThing: () => {},
    setReviews: () => {},
    addReview: () => {},
  })

export default WhiskeyContext;

export class WhiskeyProvider extends Component {
  state = {
    whiskey: {},
    error: null,
    reviews: [],
    isLoggedIn: false
  }
  setError = error => {
    console.error(error)
    this.setState({ error })
  }
  clearError = () =>{
    this.setState({error: null})
  }
  setWhiskey = whiskey => {
    
    this.setState({ whiskey })
  }
  setReviews = reviews => {
    this.setState({ reviews })
  }
  clearWhiskey = () => {
    this.setWhiskey( {whiskey: {}})
  }
  addReview = review =>{
    this.setReviews({
      ...this.state.reviews, review
    })
  }
  userLogin = () =>{
    this.setState({isLoggedIn: true})
  }
  userLogout =() =>{
    this.setState({isLoggedIn: false})
  }
  render() {
    const value = {
        whiskey: this.state.whiskey,
        reviews: this.state.reviews,
        error: this.state.error,
        isLoggedIn: this.state.isLoggedIn,
        setError: this.setError,
        clearError: this.clearError,
        setWhiskey: this.setWhiskey,
        setReviews: this.setReviews,
        clearWhiskey: this.clearWhiskey,
        addReview: this.addReview,
        userLogin: this.userLogin,
        userLogout: this.userLogout
    }
    return (
      <WhiskeyContext.Provider value={value}>
        {this.props.children}
      </WhiskeyContext.Provider>
    )
  }
}
