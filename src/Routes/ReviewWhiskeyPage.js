import React, { Component } from 'react'
import WhiskeyReviewForm from '../Components/WhiskeyReviewForm/WhiskeyReviewForm';

export default class ReviewWhiskeyPage extends Component {
  static defaultProps = {
    history: {
      push: () => {},
    }
  }

  handleReviewSucess = (whiskeyId) => {
    this.props.history.push(`/whiskeys/${whiskeyId}`)
  }

  render() {
    return (
      <section className='review-whiskey-form container row'>
        <WhiskeyReviewForm 
          onCreatedReviewSuccess={
            (whiskeyId) => this.handleReviewSucess(whiskeyId)
          }
        />
      </section>
    )
  }
}
