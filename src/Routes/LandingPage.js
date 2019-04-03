import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './LandingPage.css';

export default class LandingPage extends Component {
  render() {
    return (
      <section className='row'>
        <div className='landing-page-container col-6'>
          <h3 className='Logo'>Caskmates</h3>
          <p className='branding-quote'>For us whiskey isn't just a drink, its a passion!</p>
          <p> This is your one stop for all the info you'll ever need on whiskey needs. You'll be able to construct your own 
            personalized list with your favorite drink or keep track of new whiskeys you can not wait to try.
          simply share your expertise so others can see what they are missing out!</p>
          <Link to={'/login'}>
            <input type='button' name='get-started-btn' value='Get Started' />
          </Link>
        </div>
      </section>
    )
  }
}
