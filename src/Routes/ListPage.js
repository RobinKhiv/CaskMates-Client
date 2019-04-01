import React, { Component } from 'react'
import WhiskeyApiService from '../Services/whiskey-api-service';
import WhiskeyListContext from '../Context/WhiskeyListContext';
import UserListItem from '../Components/UserListItem/UserListItem';
import './ListPage.css'

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
      <div className='row'>
        <section className="favoriteList col-12">
          <h2>Favorite List</h2><br/>
          {favoriteList.map(whiskey=> <UserListItem key={whiskey.id} whiskey={whiskey}/>)}
        </section>
        <section className="wishList col-12">
          <h2>Wish List</h2><br/>
          {wishList.map(whiskey=> <UserListItem key={whiskey.id} whiskey={whiskey}/>)}
        </section>
        <section className="alreadyTriedLisT col-12">
          <h2>Already Tried List</h2><br/>
          {alreadyTried.map(whiskey=> <UserListItem key={whiskey.id} whiskey={whiskey}/>)}
        </section>       
      </div>
    )
  }
}
