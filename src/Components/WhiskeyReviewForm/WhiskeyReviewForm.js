import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import WhiskeyContext from '../../Context/WhiskeyContext';
import WhiskeyApiService from '../../Services/whiskey-api-service';
import './WhiskeyReviewForm.css';

export default class WhiskeyReviewForm extends Component {
  static defaultProps = {
    onCreatedReviewSuccess: () => {}
  }
  static contextType = WhiskeyContext;

  handleSubmit = (e) =>{
    e.preventDefault();
    const whiskeyId = this.context.whiskey.id;
    const {rating, tasting} = e.target;
    console.log(rating.value, tasting.value);
    WhiskeyApiService.postReview(
      whiskeyId, parseInt(rating.value), 
      {tasting: tasting.value}
    )
    .then((res) => this.props.onCreatedReviewSuccess(whiskeyId)
    )
    .catch(res => {
      this.context.setError(res.error)
    }); 
  }
  render() {
    const {whiskey}= this.context;
    const {error} = this.context;
    return (
      <form className="whiskeyReviewForm" onSubmit={this.handleSubmit}>
        <h2>Review for {whiskey.whiskeyName} </h2>
        <label htmlFor='rating'>Rating: </label>
        <select name="rating" id="review-rating-form">
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
        </select><br/>
        <label htmlFor='tasting'>Tasting: </label>
        <input type="text" name='tasting'/><br/>
        <input type="submit" name="submit" value="submit"/>
        <Link to={`/whiskeys/${whiskey.id}`}>
          <input type='button' name='cancel-review-btn' value='cancel'/>
        </Link>
        <div role="alert">
          {error && <p className="red">{error}</p>}
        </div>
      </form>
    )
  }
}
