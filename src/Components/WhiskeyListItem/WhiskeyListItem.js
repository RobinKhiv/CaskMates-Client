import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './WhiskeyListItem.css'
import WhiskeyApiService from '../../Services/whiskey-api-service';
import WhiskeyListContext from '../../Context/WhiskeyListContext';
import CheckedStar from '../StarRatings/CheckedStar';
import TokenService from '../../Services/token-api-service';


export default class WhiskeyListItem extends Component {
  constructor(){
    super();
    this.state={
      showAddMenu: false
    }
  }
  static contextType = WhiskeyListContext;

  showAddMenu = (e) => {
    e.preventDefault();
    this.setState({showAddMenu: true}, () => {
      document.addEventListener('click', this.closeAddMenu)
    });
  }
  
  closeAddMenu = e => {
    e.stopPropagation();
    this.setState({showAddMenu: false}, () => {
      document.removeEventListener('click', this.closeAddMenu)
    })
  }

  addButton = () =>{
    return (
    <input type="button" className="dropdown-add-btn" name="addWhiskey" value="Add" onClick={this.showAddMenu}/>
    )
  }

  addToList = (whiskey_Id, list_id) => {
    WhiskeyApiService.addToList(whiskey_Id, list_id)  
  }

  generateRatingStars= (value)=> {
     const checkedStar = [];
     if(value >= 1)
       for(let i = 0; i <= value; i++)
         checkedStar.push('star');
     return <CheckedStar checkedStar={checkedStar}/> 
  }

  render() {
    const {whiskey} = this.props;
    return (
    <div className="col-3 WhiskeyList" style={{backgroundImage: `url(${whiskey.image})`}} >
      <div className="listText">
      <Link to={`/whiskeys/${whiskey.whiskey_id}`} className='whiskeyListItem'>
        <div className="whiskeyListText">
          <h2 className='whiskeyListName'>{whiskey.whiskey_name}</h2>
          <p className="ratingText"> Rating: {this.generateRatingStars(whiskey.average_review_rating)} </p>
        </div>
      </Link>
      </div>
      <div className='dropdown-add'>
        {TokenService.hasAuthToken() ? this.addButton(): ''}
      {this.state.showAddMenu ? (
        <div className="dropdown-content" >
        <input type="button" name="FavoriteLst" className='add-selection' onClick={() => this.addToList(whiskey.whiskey_id, 1)} value="Favorite List"/><br/>
        <input type="button" name="wishLst" className='add-selection' onClick={() => this.addToList(whiskey.whiskey_id, 2)} value="Wish List"/><br/>
        <input type="button" name="alreadyTriedLst" className='add-selection triedLst' onClick={()=> this.addToList(whiskey.whiskey_id, 3)} value="Already Tried List"/><br/>
      </div>) : ""}
      </div>
    </div>
    )
  }
}



