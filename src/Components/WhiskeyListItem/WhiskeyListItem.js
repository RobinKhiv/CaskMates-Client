import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './WhiskeyListItem.css'
import WhiskeyApiService from '../../Services/whiskey-api-service';


export default class WhiskeyListItem extends Component {
  constructor(){
    super();
    this.state={
      showAddMenu: false
    }
  }

  showAddMenu = (e) => {
    e.preventDefault();
    this.setState({showAddMenu: true}, () => {
      document.addEventListener('mouseup', this.closeAddMenu)
    });
  }
  
  closeAddMenu = e => {
    e.stopPropagation();
    // if(!this.addMenu.contains(e.target)){
      this.setState({showAddMenu: false}, () => {
        document.removeEventListener('click', this.closeAddMenu)
      })
    // }
  }

  addToList = (whiskey_Id, list_id) => {
    WhiskeyApiService.addToList(whiskey_Id, list_id)
    this.setState({
      showAddMenu: false}, 
      () => {document.removeEventListener('click', this.closeAddMenu)}
    )
      
  }
  deleteFromList = (list_id) => {
    WhiskeyApiService.removeWhiskeyFromList(list_id)
    .then(() => console.log('deleted'))
  }
 
  render() {
    const {whiskey} = this.props;
    return (
    <div className="col-3 WhiskeyList">
      <Link to={`/whiskeys/${whiskey.whiskey_id}`} className='whiskeyListItem'>
      <div className="whiskeyListText">
        <h2>{whiskey.whiskeyName}</h2>
        <p> Rating: {whiskey.average_review_rating} </p>
      </div>
      </Link>
      <input type="button" name="addWhiskey" value="Add" onMouseDown={this.showAddMenu}/>
      {this.state.showAddMenu ? (
      <div className="menu" >
        <input type="button" name="FavoriteLst" onMouseUp={() => this.addToList(whiskey.whiskey_id, 1)} value="Favorite List"/>
        <input type="button" name="alreadyTriedLst" onMouseUp={()=> this.addToList(whiskey.whiskey_id, 3)} value="Already Tried List"/>
        <input type="button" name="wishLst" onMouseUp={() => this.addToList(whiskey.whiskey_id, 2)} value="Wish List"/>
      </div>) : ""}
      <input type="button" name="delete" onClick={() =>this.deleteFromList(whiskey.id)}value="remove"/>
      <input type="button" name="reviewWhiskey" value="Review"/>
    </div>
    )
  }
}



