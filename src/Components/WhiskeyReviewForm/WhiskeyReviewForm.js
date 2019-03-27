import React, { Component } from 'react'
import WhiskeyContext from '../../Context/WhiskeyContext';
import {Link} from 'react-router-dom'
import WhiskeyApiService from '../../Services/whiskey-api-service';

export default class WhiskeyReviewForm extends Component {

  static contextType = WhiskeyContext
  handleSubmit = (e) =>{
    e.preventDefault();
    const whiskeyId = this.context.whiskey.id;
    const {rating, nose, palate, finish, additional_comments} = e.target;
    WhiskeyApiService.postReview(
      whiskeyId, rating.value, 
      nose.value, palate.value, 
      finish.value, additional_comments.value 
    )
    .then((res) => this.props.onCreatedReviewSuccess(whiskeyId)
    )
    .catch(res => {
    this.setState({ error: res.error })
    });
    
  }
  render() {
    const {whiskey}= this.context;
   
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
        <label htmlFor='nose'>Nose: </label>
        <input type="text" name='nose'/><br/>
        <label htmlFor="palate">Palate: </label>
        <input type="text" name='palate'/><br/>
        <label htmlFor='finish'>Finish: </label>
        <input type="text" name='finish'/><br/>
        <label htmlFor='additional_comments'>Additional Comments: </label>
        <input type="text" name='additional_comments'/><br/>
        <input type="submit" name="submit" value="submit"/>
        <Link to={`/whiskeys/${whiskey.id}`}>
        <input type='button' name='cancel-review-btn' value='cancel'/>
        </Link>
      </form>
    )
  }
}
