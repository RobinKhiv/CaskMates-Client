import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './header.css';
import TokenService from '../../Services/token-api-service';
import WhiskeyContext from '../../Context/WhiskeyContext';

export default class Header extends Component {
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
          <Link
            to='/register'>
            Register
          </Link>
          <Link
            to='/login'>
            Log in
          </Link>
        </div>
      )
  }
  
  render() {
    return (
      <nav role="navigation" className="header">
          <Link to='/' className="brand">Cask Mates</Link>
        <div className="navbar-anchors">
            <ul>
                <li>
                  <Link to='/whiskeys'>Whiskey Lookup</Link>
                </li>
                <li>
                  <Link to='/whiskeyList'>List</Link>
                </li>
                <li>
                  <Link to='/addWhiskey'>Add Whiskey</Link>
                </li>          
            </ul>
        </div>
        {TokenService.hasAuthToken()
          ? this.renderLogoutLink()
          : this.renderLoginLink()}
      </nav>
    )
  }
}
