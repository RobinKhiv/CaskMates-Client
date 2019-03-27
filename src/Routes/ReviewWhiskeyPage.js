import React, { Component } from 'react'
import WhiskeyReviewForm from '../Components/WhiskeyReviewForm/WhiskeyReviewForm';

export default class ReviewWhiskeyPage extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    }
  }
  handleReviewSucess = (whiskeyId) => {
    this.props.history.push(`/whiskeys/${whiskeyId}`)
  }
  render() {
    return (
      <React.Fragment>
        <WhiskeyReviewForm onCreatedReviewSuccess={(whiskeyId) => this.handleReviewSucess(whiskeyId)}/>
      </React.Fragment>
    )
  }
}
