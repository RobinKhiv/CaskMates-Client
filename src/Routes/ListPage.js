import React, { Component } from 'react'
import WhiskeyApiService from '../Services/whiskey-api-service';
import WhiskeyListContext from '../Context/WhiskeyListContext';
import WhiskeyListItem from '../Components/WhiskeyListItem/WhiskeyListItem'

export default class ListPage extends Component {
  static contextType = WhiskeyListContext;
  
  componentDidMount(){
    WhiskeyApiService.getWhiskeyList()
    .then(whiskeyList => this.context.setWhiskeyList(whiskeyList))
    .catch(this.context.setError)
  }
  
  render() {
    const {favoriteList, alreadyTried, wishList} = this.context;
    console.log(alreadyTried)
    return (
      <React.Fragment>
        <section className="favoriteList row">
          <h2>Favorite List</h2>
          {favoriteList.map(whiskey=> <WhiskeyListItem key={whiskey.id} whiskey={whiskey}/>)}
        </section>
        <section className="alreadyTriedLisT row">
          <h2>Already Tried List</h2>
          {alreadyTried.map(whiskey=> <WhiskeyListItem key={whiskey.id} whiskey={whiskey}/>)}
        </section>
        <section className="wishList">
          <h2>Wish List</h2>
          {wishList.map(whiskey=> <WhiskeyListItem key={whiskey.id} whiskey={whiskey}/>)}
        </section>
      </React.Fragment>
    )
  }
}
