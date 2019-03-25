import React, { Component } from 'react';
import WhiskeyApiServices from '../Services/whiskey-api-service';
import WhiskeyContext from '../Context/WhiskeyContext';


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
 componentWillUnmount() {
  this.context.clearWhiskey()
}
  render() {
    const {whiskey, reviews} = this.context;
    
    // this.context.whiskey.title;
    // ID :{this.props.match.params.whiskeyId}
    return (
    <React.Fragment>
    <section>
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
    </section>
    <section className="reviews">
      <ul className='WhiskeyPage__review-list'>
      <input type="button" name="addReview" value="Add Review"/>
      <div className="review-title"><strong>Reviews</strong></div>
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
          <div><strong>Additional Comments:</strong> {review.additional_comments}</div>
        </li>)
}