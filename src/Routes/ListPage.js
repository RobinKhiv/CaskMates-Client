import React, { Component } from 'react'
import WhiskeyApiService from '../Services/whiskey-api-service';
import WhiskeyListContext from '../Context/WhiskeyListContext';
import UserListItem from '../Components/UserListItem/UserListItem'

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
      <React.Fragment>
        <section className="favoriteList row">
          <h2>Favorite List</h2>
          {favoriteList.map(whiskey=> <UserListItem key={whiskey.id} whiskey={whiskey}/>)}
        </section>
        <section className="wishList row">
          <h2>Wish List</h2>
          {wishList.map(whiskey=> <UserListItem key={whiskey.id} whiskey={whiskey}/>)}
        </section>
        <section className="alreadyTriedLisT row">
          <h2>Already Tried List</h2>
          {alreadyTried.map(whiskey=> <UserListItem key={whiskey.id} whiskey={whiskey}/>)}
        </section>       
      </React.Fragment>
    )
  }
}
