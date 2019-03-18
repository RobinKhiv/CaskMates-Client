import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './header.css';

export default class Header extends Component {
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
          <Link to='/' className="brand">Taste of Whiskey</Link>
        <div className="navbar-anchors">
            <ul>
                <li>
                  <Link to='/whiskeyLookup'>Whiskey Lookup</Link>
                </li>
                <li>
                  <Link to='/list'>List</Link>
                </li>
                <li>
                  <Link to='/addWhiskey'>Add Whiskey</Link>
                </li>      
                <li>
                  <Link to='/login'>Login</Link>
                </li>      
            </ul>
        </div>
        {/* {
           this.renderLoginLink()
        } */}
      </nav>
    )
  }
}
