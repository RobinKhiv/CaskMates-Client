import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import TokenService from '../../Services/token-api-service';
import WhiskeyContext from '../../Context/WhiskeyContext';
import './header.css';

export default class Navigation extends Component {
  static contextType = WhiskeyContext;

  handleLogoutClick = () => {
    TokenService.clearAuthToken()
    this.context.userLogout();
  }

  renderLogoutLink() {
    return (
      <div className='Header__logged-in'>
        <Link onClick={this.handleLogoutClick} to='/'>
          Logout
        </Link>
      </div>
    )
  }

  renderLoginLink() {
    return (
        <div className='Header__not-logged-in'>
          <Link className='nav-a log'
            to='/login'>
            Log in
          </Link>
        </div>
      )
  }
  renderUserFeaturesLink() {
    return (
      <React.Fragment>
        <Link className='nav-a' to='/whiskeyList'>List</Link>
        <Link className='nav-a' to='/addWhiskey'>Add Whiskey</Link>
      </React.Fragment>
    )
  }
  
  render() {
    return (
      <nav role='navigation' className='navigation'>
        <Link to='/' className='brand'>Cask Mates</Link>
      <div className='navbar-anchors'>
        <Link className='nav-a' to='/whiskeys'>Whiskey Lookup</Link>
        {TokenService.hasAuthToken() 
        ? this.renderUserFeaturesLink() 
        : ''}
      </div>
        {TokenService.hasAuthToken()
          ? this.renderLogoutLink()
          : this.renderLoginLink()}
      </nav>
    )
  }
}
