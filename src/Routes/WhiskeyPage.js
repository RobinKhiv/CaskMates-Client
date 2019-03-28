import React, { Component } from 'react';
import WhiskeyApiServices from '../Services/whiskey-api-service';
import WhiskeyContext from '../Context/WhiskeyContext';
import {Link} from 'react-router-dom';

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
    <React.Fragment>
    <section>
      <div className='whiskey-content-container row'>
        <h1>{whiskey.whiskeyName}</h1>
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
    <section className="reviews">
      <Link to={`/whiskeys/${whiskeyId}/addReview`}>
        <input type="button" name="addReview" value="Add Review"/>
      </Link>
      <div className="review-title"><strong>Reviews</strong></div>
      <ul className='WhiskeyPage__review-list'>
        <WhiskeyReviews reviews={reviews} /> 
      </ul>
    </section>
    </React.Fragment>  
    )
  }
}

function WhiskeyReviews({ reviews = [] }) {
  return reviews.map(review =>
    <li className='review' key={review.id}>
      <h3>{review.user.user_name}</h3>
      <div><strong>Rating:</strong> {review.rating} Star</div>
      <div><strong>Nose:</strong> {review.nose}</div>
      <div><strong>Tasting:</strong> {review.palate}</div>
      <div><strong>Finish:</strong> {review.finish}</div>
      <div><strong>Additional Comments:</strong> {review.additional_comments}</div>
    </li>
  )
}