import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './WhiskeyListItem.css'
import WhiskeyApiService from '../../Services/whiskey-api-service';
import WhiskeyListContext from '../../Context/WhiskeyListContext';
import CheckedStar from '../StarRatings/CheckedStar';


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
      document.addEventListener('mouseup', this.closeAddMenu)
    });
  }
  
  closeAddMenu = e => {
    e.stopPropagation();
    this.setState({showAddMenu: false}, () => {
      document.removeEventListener('mouseup', this.closeAddMenu)
    })
  }

  addToList = (whiskey_Id, list_id) => {
    WhiskeyApiService.addToList(whiskey_Id, list_id)  
  }
  backgroundImage = (whiskeyImage) => {
    return  `background-image: URL("${whiskeyImage}")`
  }
  generateRatingStars= (value)=> {
     const checkedStar = [];
     if(value >= 1){
       for(let i = 0; i <= value; i++){
         checkedStar.push('star');
        }
      }
      return <CheckedStar checkedStar={checkedStar}/> 
    }
  render() {
    const {whiskey} = this.props;
    return (
    <div className="col-3 WhiskeyList" style={{backgroundImage: `url(${whiskey.image})`}} >
      <div className="listText">
      <Link to={`/whiskeys/${whiskey.whiskey_id}`} className='whiskeyListItem'>
        <div className="whiskeyListText">
          <h2 className='whiskeyListName'>{whiskey.whiskeyName}</h2>
          <p className="ratingText"> Rating: {this.generateRatingStars(whiskey.average_review_rating)} </p>
        </div>
      </Link>
      </div>
      <input type="button" name="addWhiskey" value="Add" onMouseDown={this.showAddMenu}/>
      {this.state.showAddMenu ? (
      <div className="menu" >
        <input type="button" name="FavoriteLst" onMouseUp={() => this.addToList(whiskey.whiskey_id, 1)} value="Favorite List"/><br/>
        <input type="button" name="alreadyTriedLst" onMouseUp={()=> this.addToList(whiskey.whiskey_id, 3)} value="Already Tried List"/><br/>
        <input type="button" name="wishLst" onMouseUp={() => this.addToList(whiskey.whiskey_id, 2)} value="Wish List"/>
      </div>) : ""}
    </div>
    )
  }
}



