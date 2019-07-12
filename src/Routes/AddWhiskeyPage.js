import React from 'react'
import WhiskeyForm from '../Components/WhiskeyForm/WhiskeyForm'

const addWhiskeyPage = props => {
  const handleAddWhiskeySuccess = whiskeyId => {
    props.history.push(`/whiskeys/${whiskeyId}`)
  };
  return (
    <section className='new-whiskey-form container row'>
      <WhiskeyForm onAddSuccess={handleAddWhiskeySuccess}/>
    </section>
  ) 
}

export default addWhiskeyPage;