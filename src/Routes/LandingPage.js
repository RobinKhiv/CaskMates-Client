import React from 'react';
import RegistrationForm from '../Components/RegistrationForm/Registration';

import './LandingPage.css';

const landingPage = props => {
  const handleRegistrationSuccuess = () => {
    props.history.push('/login')
  }

  return (
    <section className='landing-registration-page row'>
      <div className='landing-page-container col-4'>
        <h3 className='Logo'>Caskmates</h3>
        <p> This is your one stop for all the info you'll ever need on whiskey needs. You'll be able to construct your own 
          personalized list with your favorite drink, keep track of new whiskeys you can not wait to try or
          simply share your expertise so others can see what they are missing out!</p>
      </div>
      <div className="registration-container col-4">
        <RegistrationForm 
          onRegistrationSuccess={
            () => handleRegistrationSuccuess()
          }
        />
    </div>
    </section>
  )
 }

 export default landingPage;