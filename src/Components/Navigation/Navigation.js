import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import TokenService from '../../Services/token-api-service';
import WhiskeyContext from '../../Context/WhiskeyContext';
import './Navigation.css';

export default class Navigation extends Component {
  static contextType = WhiskeyContext;

  handleLogoutClick = () => {
    TokenService.clearAuthToken()
    this.context.userLogout();
  }

  renderLogoutLink() {
    return (
      <div className='Header__logged-in'>
        <Link className='nav-a logout' onClick={this.handleLogoutClick} to='/'>
          <img alt='logout icon' height='14' src='https://cdn2.iconfinder.com/data/icons/picons-essentials/57/logout-512.png'/>
        </Link>
      </div>
    )
  }

  renderLoginLink() {
    return (
        <div className='Header__not-logged-in'>
          <Link className='nav-a log'
            to='/login'><img alt="login icon" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrdZKzkouFPEorhZMdksNlgtVyANA_0YJl1NYGqlpaELG4TslJig' height='14'></img>
          </Link>
        </div>
      )
  }

  renderUserFeaturesLink() {
    return (
      <React.Fragment>
        <Link className='nav-a' to='/addWhiskey'>Add Whiskey</Link>
        <span>|</span>
        <Link className='nav-a' to='/whiskeyList'>My List</Link>
        <span>|</span>
      </React.Fragment>
    )
  }
  
  render() {
    return (
      <nav role='navigation' className='navigation'>
        <Link to='/' className='brand'>Caskmates</Link>
        <div className='navbar-anchors'>
          <Link className='nav-a' to='/whiskeys'>Whiskey Lookup</Link>
          <span>|</span>
          {TokenService.hasAuthToken() 
          ? this.renderUserFeaturesLink() 
          : ''}
          {TokenService.hasAuthToken()
          ? this.renderLogoutLink()
          : this.renderLoginLink()}
        </div> 
      </nav>
    )
  }
}
