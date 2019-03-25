import React, {Component} from 'react';

const WhiskeyContext = React.createContext({
    Whiskey: {},
    reviews: [],
    error: null,
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
    reviews: []
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
  render() {
    const value = {
        whiskey: this.state.whiskey,
        reviews: this.state.reviews,
        error: this.state.error,
        setError: this.setError,
        clearError: this.clearError,
        setWhiskey: this.setWhiskey,
        setReviews: this.setReviews,
        clearWhiskey: this.clearWhiskey,
        addReview: this.addReview
    }
    return (
      <WhiskeyContext.Provider value={value}>
        {this.props.children}
      </WhiskeyContext.Provider>
    )
  }
}
