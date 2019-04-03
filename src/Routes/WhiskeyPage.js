import React, { Component } from 'react';
import WhiskeyApiServices from '../Services/whiskey-api-service';
import WhiskeyContext from '../Context/WhiskeyContext';
import {Link} from 'react-router-dom';
import './WhiskeyPage.css';
import CheckedStar from '../Components/StarRatings/CheckedStar'

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
      WhiskeyApiServices.getWhiskeyReviews(whiskeyId)
      .then(this.context.setReviews)
      .catch(this.context.setError)
    }
  
  render() {
    const {whiskey, reviews} = this.context;
    const {whiskeyId} = this.props.match.params;
    
    return (
   <React.Fragment >
    <section className="whiskey-content-container row">
      <div className='whiskeyContent col-6'>
        <h1 className='whiskeyPageTitle'>{whiskey.whiskey_name}</h1>
        <img src={whiskey.image} alt="whiskey" className='whiskey-img col-3'></img>
        <h2>Rating: {whiskey.average_review_rating}</h2>
        <div><strong>Origin:</strong> {whiskey.origin}</div>
        <div><strong>Abv: </strong> {whiskey.abv === undefined ? 'Not Avaliable' : `${whiskey.abv}%`}</div>
        <div> <strong>Price: </strong> {whiskey.price === undefined ? 'Not Avaliable' : whiskey.price}</div>
        <div className="desc"><strong>Description: </strong> 
        {whiskey.content}
        </div>
        <div className="nose"><strong>NOSE:</strong> 
        {whiskey.nose}</div>
        <div className="palate"><strong>PALATE:</strong>
        {whiskey.palate}</div>
        <div className="finish"><strong>FINISH:</strong>
        {whiskey.finish}</div>
        <input type="button" value="add"/>
        <div>---------------------</div>
      </div>
    </section>
    <section className="reviews row">
      <div className='review-container col-6'>
      <Link to={`/whiskeys/${whiskeyId}/addReview`}>
        <input type="button" name="addReview" value="Add Review"/>
      </Link>
      <div className="review-title"><strong>Reviews</strong></div>
      <ul className='WhiskeyPage__review-list'>
        <WhiskeyReviews reviews={reviews} /> 
      </ul>
      </div>
    </section>
  </React.Fragment>
  )
  }
}

function WhiskeyReviews({ reviews = [] }) {
  const generateRatingStars = function (value) {
    const checkedStar = [];
    for(let i = 0; i <= value; i++){
        checkedStar.push('star');
    }
     return <CheckedStar checkedStar={checkedStar}/> 
   };

  return reviews.map(review =>
    <li className='review' key={review.id}>
      <h3 className="userName-container">{review.user.user_name}</h3>
      <div className="userReview-container">
        <div className="userRating"><strong>Rating:</strong> {generateRatingStars(review.rating)}</div>
        <div className="userTasting"><strong>Tasting:</strong> {review.tasting}</div>
      </div>
    </li>
  )
}