import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import WhiskeyListContext from '../../Context/WhiskeyListContext';
import CheckedStar from '../StarRatings/CheckedStar';
import TokenService from '../../Services/token-api-service';
import AddToListButton from '../AddToListButton/AddToListButton';
import './WhiskeyListItem.css'


export default class WhiskeyListItem extends Component {
  static contextType = WhiskeyListContext;

  generateRatingStars= (value)=> {
     const checkedStar = [];
     if(value >= 1)
       for(let i = 0; i <= value; i++)
         checkedStar.push('star');
     return <CheckedStar checkedStar={checkedStar}/> 
  }

  render() {
    const {whiskey_id, average_review_rating, image, whiskey_name} = this.props.whiskey;
 
    return (
      <div className="col-3 WhiskeyList" style={{backgroundImage: `url(${image})`}} >
        <div className="listText">
          <Link to={`/whiskeys/${whiskey_id}`} className='whiskeyListItem'>
            <div className="whiskeyListText">
              <h2 className='whiskeyListName'>{whiskey_name}</h2>
              <p className="ratingText"> Rating: {this.generateRatingStars(average_review_rating)} </p>
            </div>
          </Link>
        </div>
        <div className='dropdown-add'>
          {TokenService.hasAuthToken() ? <AddToListButton id={whiskey_id}/>: ''}
        </div>
      </div>
    )
  }
}



