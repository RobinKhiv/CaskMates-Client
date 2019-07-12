import React from 'react';
import WhiskeyReviewForm from '../Components/WhiskeyReviewForm/WhiskeyReviewForm';

const reviewWhiskeyPage = props => {
  const handleReviewSucess = whiskeyID => {
    props.history.push(`/whiskeys/${whiskeyID}`)
  }
  return (
    <section className='review-whiskey-form container row'>
      <WhiskeyReviewForm 
        onCreatedReviewSuccess={
          whiskeyId => handleReviewSucess(whiskeyId)
        }
      />
    </section>
  )
}
export default reviewWhiskeyPage;