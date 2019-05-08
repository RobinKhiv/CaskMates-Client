import React, { Component } from 'react'
import WhiskeyApiService from '../Services/whiskey-api-service';
import WhiskeyListContext from '../Context/WhiskeyListContext';
import UserListItem from '../Components/UserListItem/UserListItem';
import './ListPage.css'

export default class ListPage extends Component {
  static contextType = WhiskeyListContext;
  state = {
    currentView: ''
  }

  componentDidMount(){
    WhiskeyApiService.getWhiskeyList()
    .then(whiskeyList => 
      this.context.setWhiskeyList(whiskeyList))
    .catch(this.context.setError)
  }

  handleListRender = list => {
    this.setState({currentView: list})
  }
  
  renderList(list){
    return list.map(whiskey=> <UserListItem key={whiskey.id} whiskey={whiskey}/>)
  }
  
  render() {
    const { alreadyTried, favoriteList, wishList } = this.context;
    const { currentView } = this.state;
    return (
      <React.Fragment>
        <header className="row">
          <form className="list-selection-form col-12"onChange={this.handleListChange}>
            <label htmlFor="list-selection">Select Your List</label>
            <div className="list-selection-button-container">
              <button type="button" name="list-selection" onClick={() => this.handleListRender('Favorite List')}>Favorite List</button>
              <button type="button" name="list-selection" onClick={() => this.handleListRender('Wish List')}>Wish List</button>
              <button type="button" name="list-selection" onClick={() => this.handleListRender('Already Tried List')}>Already Tried</button>
            </div>
          </form>
        </header>
        <section className='row'>
          <div className="userListTitle col-12">
           <h2>{currentView}</h2>
          </div>
          {currentView === 'Favorite List' && this.renderList(favoriteList)}
          {currentView === 'Wish List' && this.renderList(wishList)}
          {currentView === 'Already Tried List' && this.renderList(alreadyTried)}
        </section>
      </React.Fragment>
    )
  }
}
