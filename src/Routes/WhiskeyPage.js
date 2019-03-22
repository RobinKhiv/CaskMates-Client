import React, { Component } from 'react';
import WhiskeyApiServices from '../Services/whiskey-api-service';
import WhiskeyContext from '../Context/WhiskeyContext';

export default class WhiskeyPage extends Component {
  static defaultProps ={
      match: {params: {}},
 }
 static contextType = WhiskeyContext;

 componentDidMount(){
    const {whiskeyId} = this.props.match.params;
    this.context.clearError();
    WhiskeyApiServices.getWhiskey(whiskeyId)
      .then(this.context.setWhiskey)
      .catch(this.context.setError)
    // WhiskeyApiServices.getWhiskeyReviews(whiskeyId)
    //   .then(this.context.setReviews)
    //   .catch(this.context.setError)
 }

  render() {
    return (
      <div>
        <p> {this.context.whiskey.title}</p>
        <p> ID :{this.props.match.params.whiskeyId}</p>
       
      </div>
    )
  }
}
