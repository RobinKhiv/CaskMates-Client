import React, { Component } from 'react'
import WhiskeyApiService from '../Services/whiskey-api-service';
import WhiskeyListContext from '../Context/WhiskeyListContext';

export default class ListPage extends Component {
  static contextType = WhiskeyListContext;
  
  componentDidMount(){
    WhiskeyApiService.getWhiskeyList()
    .then(whiskeyList => this.context.setWhiskeyList(whiskeyList))
    .catch(this.context.setError)
  }
  
  render() {
    const {favoriteList, alreadyTried, wishList} = this.context;
    return (
      <div>
        
      </div>
    )
  }
}
