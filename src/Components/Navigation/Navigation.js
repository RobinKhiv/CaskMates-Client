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
      <React.Fragment>
        <Link className='nav-text' to='/addWhiskey'>Add Whiskey</Link>
        <Link className='nav-text' to='/whiskeyList'>My List</Link>
        <Link className='nav-text logout' onClick={this.handleLogoutClick} to='/'>
          Logout
        </Link>
      </React.Fragment>
    )
  }

  renderLoginLink() {
    return (
      <Link className='nav-text login' to='/login'>
        Login
      </Link>
    )
  }

  handleNavToggle (){
    const navs = document.querySelectorAll('.nav-text-right')
    navs.forEach(nav => nav.classList.toggle('Navbar-ToggleShow'));
  }

  render() {
    const checkForUser = TokenService.hasAuthToken();
    return (
      <nav role='navigation'>
        <div className="nav-text-left">
        <Link to='/' className='nav-text brand'>Caskmates</Link>
        </div>
        <div className='nav-text-right'>
          <Link className='nav-text' to='/whiskeys'>Whiskeys</Link>
          {checkForUser
          ? this.renderLogoutLink()
          : this.renderLoginLink()}
        </div>
        <div onClick={this.handleNavToggle} className="Navbar-toggle">
            <i className="fas fa-bars"></i>
        </div> 
      </nav>
    )
  }
}
