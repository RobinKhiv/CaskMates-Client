import React, { Component } from 'react'

export default class WhiskeyReview extends Component {
  render() {
    const review = this.props;
    console.log(review)
    return (
     <section className='review'>
        <div className="review-title"><strong>Reviews</strong></div>
        <h3>Robin Khiv</h3>
        <div><strong>Rating:</strong> 5 Star</div>
        <div><strong>Nose:</strong> Smells like spicy vanillas</div>
        <div><strong>Tasting:</strong> peaty</div>
        <div><strong>Additional Comments:</strong> For its price its extremely exclusive. I would recommend The macallan edition 1 for it isn't as hurtful to the wallet</div>
        <input type="button" name="write-review" value="write review"/>
     </section>
    )
  }
}
